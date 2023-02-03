import "./MyLabel.css";
export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamanio a mostrar en la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Esta propiedad capitaliza la etiqueta
   */
  allCaps?: boolean;
  /**
   * Esta propiedad da color la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  fontColor?: string;
}
export const MyLabel = ({
  label = "noLabel",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} ${allCaps && "text-uppercase"} text-${color}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};
