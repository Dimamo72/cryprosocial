import { CacheService } from '../src/services/cache';
import { DatabaseService } from '../src/services/database';

async function main() {
    const cache = new CacheService();
    const db = new DatabaseService();

    try {
        console.log('🚀 Testing Redis cache...\n');

        // 1. Создаем тестового пользователя
        console.log('Creating test user...');
        const user = await db.createUser('0x9999...', 'charlie');
        console.log('User created:', user);

        // 2. Кэшируем пользователя
        console.log('\nCaching user...');
        await cache.cacheUser(user);
        console.log('User cached');

        // 3. Получаем пользователя из кэша
        console.log('\nGetting user from cache...');
        const cachedUser = await cache.getCachedUser(user.id);
        console.log('Cached user:', cachedUser);

        // 4. Создаем пост
        console.log('\nCreating test post...');
        const post = await db.createPost(user.id, 'Testing Redis cache! #test');
        console.log('Post created:', post);

        // 5. Кэшируем пост
        console.log('\nCaching post...');
        await cache.cachePost(post);
        console.log('Post cached');

        // 6. Получаем пост из кэша
        console.log('\nGetting post from cache...');
        const cachedPost = await cache.getCachedPost(post.id);
        console.log('Cached post:', cachedPost);

        // 7. Тестируем ленту
        console.log('\nCaching feed...');
        await cache.cacheFeed(user.id, [post]);
        const cachedFeed = await cache.getCachedFeed(user.id);
        console.log('Cached feed:', cachedFeed);

        // 8. Тестируем поиск
        console.log('\nTesting search cache...');
        await cache.cacheSearchResults('test', [post]);
        const searchResults = await cache.getCachedSearchResults('test');
        console.log('Search results:', searchResults);

        // 9. Тестируем rate limiting
        console.log('\nTesting rate limiting...');
        const ip = '127.0.0.1';
        const canMakeRequest = await cache.checkRateLimit(ip, 'post_creation', 5);
        console.log('Can make request:', canMakeRequest);

        // 10. Тестируем уведомления
        console.log('\nTesting notifications...');
        await cache.addNotification(user.id, {
            type: 'like',
            postId: post.id,
            userId: 'test_user',
            timestamp: new Date()
        });
        const notifications = await cache.getNotifications(user.id);
        console.log('Notifications:', notifications);

        // 11. Тестируем сессии
        console.log('\nTesting sessions...');
        const sessionId = 'test_session';
        await cache.setSession(sessionId, { userId: user.id });
        const session = await cache.getSession(sessionId);
        console.log('Session:', session);

        // 12. Тестируем онлайн статус
        console.log('\nTesting online status...');
        await cache.updateOnlineStatus(user.id, true);
        const isOnline = await cache.isUserOnline(user.id);
        console.log('Is user online:', isOnline);

        // 13. Тестируем статистику постов
        console.log('\nTesting post statistics...');
        await cache.incrementPostStats(post.id, 'views');
        await cache.incrementPostStats(post.id, 'likes');
        const stats = await cache.getPostStats(post.id);
        console.log('Post stats:', stats);

        // 14. Тестируем хэштеги
        console.log('\nTesting hashtags...');
        await cache.trackHashtag('test', post.id);
        const hashtagPosts = await cache.getHashtagPosts('test');
        console.log('Posts with #test:', hashtagPosts);

        // 15. Тестируем trending
        console.log('\nTesting trending functionality...');
        await cache.addToSortedSet('trending:posts', 1, post.id);
        const trendingPosts = await cache.getTopFromSortedSet('trending:posts');
        console.log('Trending posts:', trendingPosts);

        // 16. Очищаем тестовые данные
        console.log('\nCleaning up...');
        await cache.invalidateUser(user.id, user.address);
        await cache.invalidatePost(post.id);
        await cache.invalidateFeed(user.id);
        console.log('Cache cleaned');

        console.log('\n✅ All cache operations completed successfully!');
    } catch (error) {
        console.error('\n❌ Error during cache testing:', error);
        process.exit(1);
    } finally {
        await cache.disconnect();
    }
}

main(); 