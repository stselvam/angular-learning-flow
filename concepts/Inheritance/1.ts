class Report {
    data: Array<string>;
    constructor(data: Array<string>) {
        this.data = data;
    }
    run() {
        this.data.forEach(function(line) { console.log(line); });
    }
}
var r: Report = new Report(['First line', 'Second line']);
r.run();