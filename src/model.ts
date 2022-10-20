export interface todoProps {

    text: string;
    start_date?: Date;
    due_date?: Date;
    status: Status;
    create_date?: Date;
    update_date?: Date;
};

export enum Status{
      Plan = 'Plan',
      Doing = 'Doing',
      Completed = 'Completed',
};
