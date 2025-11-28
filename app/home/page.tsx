// import styles from "../../styles/home.module.css";
import HomeContent from "./homeContent";

export default function HomePage() {
  return (
    <div
      style={{
        background: "url(../../home-background.png)",
        backgroundSize: "cover",
      }}
      className={`h-screen bg-cover bg-center bg-no-repeat`}
    >
      <HomeContent></HomeContent>
    </div>
  );
}
