import "./styles.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        onClick={() => setActiveTab("compound")}
        className={activeTab === "compound" ? "active" : ""}
      >
        Compound Interest
      </button>
      <button
        onClick={() => setActiveTab("sip")}
        className={activeTab === "sip" ? "active" : ""}
      >
        SIP Calculator
      </button>
    </div>
  );
};

export default Tabs;
