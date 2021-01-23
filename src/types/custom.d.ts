declare module '*.svg' {
  const content: any
  export default content
}

export type SvgIconConfig = {
  svg: {
    height: number;
    width: number;
  };
  nameConfig?: object;
}

/** SvgIcon组件需要传递的数据类 */
export interface SvgIconProps {
  /* svg图标路径 */
  name: string;
  /** svg别名 可选 最终渲染结果为svg-icon-[nick] */
  nick?: string;
  /* 图标大小 可选 长宽大小均为size px 默认为32 */
  size?: number;
  /* 填充颜色 默认#000 */
  color?: string;
  /** 描述文本 */
  desc?: string;
}

/* Svg选择类 */
export interface SvgIconItem {
  title: string;
  SvgIcons: Array<SvgIconProps>;
}

export type SvgIconArray = Array<SvgIconItem>
