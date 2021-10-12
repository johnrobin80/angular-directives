import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string | any = "transparent";
  @Input("appBetterHighlight") highlightColor: string | any = "blue";

  @HostBinding("style.backgroundColor") backgroundColor1: string | any =
    this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor1 = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }

  @HostListener("mouseenter") mouseover1(eventData: Event) {
    // this.renderer.setStyle(
    // this.elRef.nativeElement,
    // "background-color",
    // "blue"
    // );
    this.backgroundColor1 = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave1(eventData: Event) {
    // this.renderer.setStyle(
    // this.elRef.nativeElement,
    // "background-color",
    // "transparent"
    // );
    this.backgroundColor1 = this.defaultColor;
  }
}
