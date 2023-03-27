import styles from "./Header.module.css";
import Image from "next/image";

export const Header = (props: { editPage: string; onClick?: () => void }) => {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{`${props.editPage}.tsx`}</code>
      </p>
      <button onClick={props.onClick}>alert</button>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};
