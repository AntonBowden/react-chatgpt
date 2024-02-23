const App = () => {
  return (
    <div className="app">
      <section className="sidebar">
        <button>New Chat</button>
        <ul className="history">
          <li>Blah</li>
        </ul>
        <nav>
          <p>Made by Anton</p>
        </nav>
      </section>
      <section className="main">
        <h1>AntonGPT</h1>
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">Send</div>
          </div>
          <p className="info">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
