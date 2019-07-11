export interface Reviews {
    changeDate: string;
    comment: string;
    confirmationDate: string;
    creationDate: string;
    criteria: Criteria[];
    mark: string;
    markDescription: string;
    UID: string;
    orderDate: string;
}

interface Criteria {
    mark: string;
    markDescription: string;
    type: string;
}
