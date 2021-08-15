import db from '../db/index'

export async function createTicket(user_id: number, title: string) {
    let table_name = 'tickets';
    let result = await db(table_name).insert({
        user_id: user_id,
        title: title
    });

    return result

}

export async function createTags(ticket_id: number, tags: string[]) {
    let table_name = 'tags';
    for (let index = 0; index < tags.length; index++) {
        await db(table_name).insert({
            ticket_id: ticket_id,
            tag: tags[index]
        })
            .catch((err) => {
                console.log(err.message);
            })

    }
    return true
}

export async function getHighestTag() {
    let table_name = 'tags';
    //Query: select count(*), tag from tags group by tag order by tag desc limit 1
    let tag: any = await db(table_name)
        .select('tag')
        .count('* as count')
        .groupBy('tag')
        .orderBy('count', 'desc')
        .first();

    return tag
}