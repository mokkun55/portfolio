import styles from "./style.module.css";
import type { Output as OutputType } from "../../types/output-type";
import Output from "../output";

type Props = {
  outputs: OutputType[];
  filter: "all" | "article" | "slide";
};

export default function OutputList({ outputs, filter }: Props) {
  return (
    <div className={styles.container} key={filter}>
      {outputs
        .filter((output) => {
          if (filter === "all") return true;
          return output.type[0] === filter;
        })
        .map((output, index) => (
          <Output output={output} key={`${output.title}-${index}`} />
        ))}
    </div>
  );
}
