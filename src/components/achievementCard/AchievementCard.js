import React, {useEffect, useState} from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  function openCertificate() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    if (isModalOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => {
                const n = (v.name || "").toLowerCase();
                if (n.includes("certificate")) {
                  openCertificate();
                } else {
                  openUrlInNewTab(v.url, v.name);
                }
              }}
            >
              {v.name}
            </span>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={isDark ? "dark-mode modal-content" : "modal-content"}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <img
              src={cardInfo.image}
              alt={cardInfo.imageAlt || "Certificate"}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
