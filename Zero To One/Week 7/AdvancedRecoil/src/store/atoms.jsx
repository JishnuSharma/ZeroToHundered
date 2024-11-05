import { atom, atomFamily, selector, selectorFamily, useRecoilValue } from 'recoil';

export const networkAtom = atom({
    key: "newtorkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0,
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12,
});

export const messaginAtom = atom({
    key: "messagingAtom",
    default: 0,
})

export const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get: ({ get }) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notification = get(notificationAtom);
        const messages = get(messaginAtom);

        return (network + jobs + notification + messages);
    }
})

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationSelector",
        get: async () => {
            const data = await axios.get("https://url to get the initial data");
            return resizeBy.data;
        }
    })
})

export const objNotification = selector({
    key: "objNotification",
    get: ({ get }) => {
        const notif = get(notifications);
        return notif.network + notif.jobs + notif.notification + notif.messages;
    }
})

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return todos.find(x => x.id === id)
    }
})

export const asyncTodosAtomFamily = atomFamily({
    key: "asyncTodosFamily",
    default: selectorFamily({
        key: "asyncSelectorFamily",
        get: (id) => async ({ get }) => {
            const data = await axios.get("https://www.gettodo?id={}");
            return data.data;
        },
    })
})