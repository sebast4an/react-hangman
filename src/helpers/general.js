export const randomNumber = max => Math.floor(Math.random() * (max - 0 + 1) + 0);

export const searchAndReturnInstances = (tab, searched) => tab.flatMap((value, index) => (value === searched ? index : []));
