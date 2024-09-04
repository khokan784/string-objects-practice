const collage = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy divos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            GPA: 5,
            merit: 'top',
        }
    }
}
// collage.unique.result.merit = 'top top top';
// console.log(collage.unique.result.merit);
// collage.events[1] = '16 december';
// console.log(collage.events[1]);
delete collage.class
console.log(collage);