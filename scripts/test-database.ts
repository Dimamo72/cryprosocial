import { DatabaseService } from '../src/services/database';

async function main() {
    const db = new DatabaseService();

    try {
        console.log('🚀 Testing database operations...\n');

        // 1. Создаем тестовых пользователей
        console.log('Creating test users...');
        const user1 = await db.createUser('0x1234...', 'alice');
        const user2 = await db.createUser('0x5678...', 'bob');
        console.log('Users created:', { user1: user1.username, user2: user2.username });

        // 2. Обновляем профиль пользователя
        console.log('\nUpdating user profile...');
        const updatedUser = await db.updateUser(user1.id, {
            bio: 'Crypto enthusiast',
            avatar: 'https://example.com/avatar.jpg'
        });
        console.log('Updated user:', updatedUser);

        // 3. Создаем пост
        console.log('\nCreating a post...');
        const post = await db.createPost(user1.id, 'Hello Web3 World!', 'arweave-id-123');
        console.log('Post created:', post);

        // 4. Добавляем комментарий
        console.log('\nAdding a comment...');
        const comment = await db.createComment(post.id, user2.id, 'Great post!');
        console.log('Comment added:', comment);

        // 5. Ставим лайк
        console.log('\nLiking the post...');
        const like = await db.likePost(post.id, user2.id);
        console.log('Like added:', like);

        // 6. Подписываемся на пользователя
        console.log('\nFollowing user...');
        const follow = await db.followUser(user2.id, user1.id);
        console.log('Follow created:', follow);

        // 7. Получаем пост со всеми связями
        console.log('\nFetching post with relations...');
        const fetchedPost = await db.getPost(post.id);
        if (!fetchedPost) {
            throw new Error('Post not found');
        }
        console.log('Fetched post:', {
            id: fetchedPost.id,
            content: fetchedPost.content,
            author: fetchedPost.author.username,
            commentsCount: fetchedPost.comments.length,
            likesCount: fetchedPost.likes.length
        });

        // 8. Получаем ленту пользователя
        console.log('\nFetching user feed...');
        const feed = await db.getFeed(user2.id);
        console.log('Feed posts:', feed.length);

        // 9. Отменяем действия
        console.log('\nCleaning up...');
        await db.unlikePost(post.id, user2.id);
        await db.unfollowUser(user2.id, user1.id);
        console.log('Cleanup completed');

        console.log('\n✅ All database operations completed successfully!');
    } catch (error) {
        console.error('\n❌ Error during database testing:', error);
        process.exit(1);
    }
}

main(); 