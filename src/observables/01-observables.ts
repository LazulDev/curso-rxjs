import { Observable, Observer } from 'rxjs';

// const obs$ = new Observable<string>();
// const obs$ = Observable.create();
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('completado [obs]'),
};
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
});

obs$.subscribe( observer );