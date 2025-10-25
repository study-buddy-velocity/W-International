import { siWhatsapp } from "simple-icons";

const WhatsAppIcon = ({ size = 20, color = "#FFFFFF" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{siWhatsapp.title}</title>
    <path d={siWhatsapp.path} />
  </svg>
);

export default WhatsAppIcon;
