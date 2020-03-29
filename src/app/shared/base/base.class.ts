import { Subscription } from 'rxjs';

export class BaseClass {
    public subscription: Set<Subscription> = new Set();

    public unsubscribe(): void {
        this.subscription.forEach((data) => {
            data.unsubscribe();
        });
        this.subscription.clear();
    }
    public subscribe(sub: Subscription): void {
        this.subscription.add(sub);
    }
}
