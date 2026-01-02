with count as (
    select 
        album_id, 
        count(genre_id) as count 
    from album_genres 
    group by album_id 
),
albums as (
    select 
        album_id, 
        title, 
        artist_id,
        released,
        substring(released::text from 0 for 3) as hundreds
    from albums
),
query as (
    select 
        ar.name,
        a.title,
        ROW_NUMBER() OVER (PARTITION BY a.hundreds ORDER BY c.count DESC, a.released) as rn
    from 
        count c
        join albums a on c.album_id = a.album_id
        join artists ar on a.artist_id = ar.artist_id
)

select
    name,
    title
from
    query
where
    rn = 2;