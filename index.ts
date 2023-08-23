import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

// Example 1: Skipping values before emission
//emit every 1s
const srcInterval$ = interval(1000);
//skip the first 5 emitted values
const example = srcInterval$.pipe(skip(5));
const subscribe = example.subscribe((val) => console.log(val));
//output: 5...6...7...8........
