import { SectionLayout } from "../../components/section-layout";
import styles from "./style.module.css";
import ContactCard from "../../components/contact-card";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiZenn } from "react-icons/si";

export default function Contact() {
  return (
    <SectionLayout sectionTitle="Contact">
      <div className={styles.container} id="contact">
        <ContactCard
          icon={<FaTwitter size={40} />}
          title="Twitter"
          id="@mokkun_dev"
          link="https://x.com/mokkun_dev"
        />
        <ContactCard
          icon={<FaGithub size={40} />}
          title="GitHub"
          id="@mokkun55"
          link="https://github.com/mokkun55"
        />
        <ContactCard
          icon={<MdOutlineEmail size={40} />}
          title="Email"
          id="mokkunpc@gmail.com"
          link="mailto:mokkunpc@gmail.com"
        />
        <ContactCard
          icon={<SiZenn size={40} />}
          title="Zenn"
          id="@mokkun_dev"
          link="https://zenn.dev/mokkun_dev"
        />
      </div>
    </SectionLayout>
  );
}
