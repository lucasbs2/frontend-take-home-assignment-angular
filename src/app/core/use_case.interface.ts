import { Observable } from 'rxjs/internal/Observable';

export interface UseCase<I, O> {
    execute(param: I): Observable<O>;
}
