drop table if exists spells;

create table spells (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    url VARCHAR(256) NOT NULL,
    name VARCHAR(256) NOT NULL
)