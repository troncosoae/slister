CREATE TABLE Items (
    iid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    quant INTEGER,
    lid uuid
);