import { MarqueeGroup } from "./marquee-group";
import { InfoSection } from "./info-section";
import { ButtonCardInfoPictureGroup } from "./button-card-info-picture-group";
import { ButtonCardInfoGroup } from "./button-card-info-group";
import { ButtonCardTableGroup } from "./button-card-table-group";
import { Footer } from "./footer";

export interface Home {
  marquees: MarqueeGroup,
  infoSection: InfoSection,
  buttonCardInfoPicture: ButtonCardInfoPictureGroup,
  buttonCardInfo: ButtonCardInfoGroup,
  buttonCardTableGroup: ButtonCardTableGroup,
  footer: Footer
}
