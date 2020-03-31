import test from '@/api/test';
export default {
    state: {
    },
    mutations: {
    },
    actions: {
        TEST(context, data = {}) {
            return test.test(data);
        }
    },
    getters: {
    }
}