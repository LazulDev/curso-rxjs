import { Observable, Observer } from 'rxjs';

// const obs$ = new Observable<string>();
// const obs$ = Observable.create();
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('completado [obs]'),
};

const intervalo$ = new Observable<number>( subscriber => {
    let i = 1;
    const interval = setInterval( () => {
        subscriber.next( i );
        i++;
    }, 1000);


    // Función que se ejecuta con el unsubscribe
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add( subs2 )
     .add( subs3 );
setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
}, 3000);