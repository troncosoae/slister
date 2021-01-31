CREATE TABLE List (
    lid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    inserted_at timestamp not null,
    updated_at timestamp not null
)