import {
  WidgetWithStyle,
  MultiChildWidgetWithStyle,
} from "@coli.codes/web-builder-core/widget-with-style";

/**
 * React Widget that requires no additional custom import rather than react
 */
export abstract class ReactWidget extends WidgetWithStyle {}

export abstract class ReactMultiChildWidget extends MultiChildWidgetWithStyle {
  readonly children: Array<ReactWidget> = [];
  constructor(p: { children: Array<ReactWidget> }) {
    super();
    this.children = p.children;
  }
}
