export default function Profile({ currentView, setCurrentView }) {
  return (
    <section className="profile">
      <div className="profile-card">
        <div className="profile-info">
          <p>Report for</p>
          <h1>
            Julia <br /> Danilenko
          </h1>
        </div>
      </div>

      <div className="time-select">
        <button
          className={currentView === "daily" ? "active" : ""}
          onClick={() => setCurrentView("daily")}
        >
          Daily
        </button>
        <button
          className={currentView === "weekly" ? "active" : ""}
          onClick={() => setCurrentView("weekly")}
        >
          Weekly
        </button>
      </div>
    </section>
  );
}
