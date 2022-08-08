let firstJob = {
    name: "Coding",
};

let printJob = function () {
    console.log(this);
}

let job = printJob.bind(firstJob);

job();