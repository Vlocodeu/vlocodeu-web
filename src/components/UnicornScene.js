// components/UnicornScene.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function UnicornScene({
  projectId,
  jsonFilePath,
  width = "100%",
  height = "100%",
  scale = 1,
  dpi = 1.5,
  fps = 60,
  altText = "Unicorn Scene",
  ariaLabel = altText,
  className = "",
  lazyLoad = false,
}) {
  const elementRef = useRef(null);
  const sceneRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeScript = (callback) => {
      const version = "1.4.27";
      const script = document.createElement("script");
      script.src = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${version}/dist/unicornStudio.umd.js`;
      script.async = true;
      script.onload = () => callback();
      script.onerror = () => setError("Failed to load UnicornStudio script");
      document.body.appendChild(script);
    };

    const initializeScene = async () => {
      if (!elementRef.current) return;
      if (jsonFilePath) {
        elementRef.current.setAttribute("data-us-project-src", jsonFilePath);
      } else if (projectId) {
        elementRef.current.setAttribute("data-us-project", projectId);
      }

      const UnicornStudio = window.UnicornStudio;

      if (!UnicornStudio) {
        setError("UnicornStudio not found");
        return;
      }

      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
      }

      await UnicornStudio.init({ scale, dpi }).then((scenes) => {
        const scene = scenes.find(
          (scene) => scene.element === elementRef.current
        );
        if (scene) {
          sceneRef.current = scene;
        }
      });
    };

    initializeScript(() => {
      void initializeScene();
    });

    return () => {
      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
      }
    };
  }, [projectId, jsonFilePath, scale, dpi]);

  return (
    <div
      ref={elementRef}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={`relative ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
