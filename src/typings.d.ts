/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare namespace CommonTyping {
  interface IPageInfoInterface {
    page?: number;
    pageSize?: number;
    total?: number;
  }
}
