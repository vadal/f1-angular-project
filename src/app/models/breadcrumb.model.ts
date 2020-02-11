export class Breadcrumb {
    id: number;
    label: string;
    url: string;
    last: boolean;

    constructor(label: string, url: string, last: boolean) {
        this.label = label;
        this.url = url;
        this.last = last;
        this.id = new Date().getMilliseconds() + Math.random();
    }
}