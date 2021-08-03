import { Component, Input } from "@angular/core";

@Component({
  selector: "IconButton",
  templateUrl: "./iconbutton.component.html",
  styleUrls: ["./iconbutton.component.css"],
})
export class IconButtonComponent {
  @Input() label: string = "";
  @Input() type: string;

  public getIcon = (type: string) => {
    const ICON_PATH = "/assets/icons/";
    return {
      backgroundImage: `url(${ICON_PATH}${type.toLowerCase()}.svg)`,
    };
  };
}
