import create from 'zustand';

export const useStore = create(set => ({
  localData: false,

  setLocalData: isLocalData =>
    set(() => ({
      localData: isLocalData,
    })),
}));

export default () => {
  return [
    {
      localData: useStore(state => state.localData),
    },
  ];
};
