function Home() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Lobster', cursive",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1>This site is under construction, come back later.</h1>
        <span>
          You can connect with me through
          <a
            href="https://www.linkedin.com/in/delgadomiguel/"
            style={{
              color: "#0077B5",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Linkedin
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
