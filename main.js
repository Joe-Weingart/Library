function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.page = pages;
    this.read = finished;

    this.info = function() {
        let statement =  title  + " by " + author + ", " + pages;
        if (finished == false) {
            return statement + ", not yet read.";
        } else {
            return statement +", finished.";
        }

    }
}