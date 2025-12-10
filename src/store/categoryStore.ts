import { categories } from "@/constants/data";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Category {
      category_id: string;
      name: string;
      color: string;
      amount: number;
}

interface CategoryStore {
      categories: Category[];
      addCategory: (category: Omit<Category, "category_id">) => void;
      deleteCategory: (id: string) => void;
      updateCategory: (id: string, updated: Partial<Category>) => void;
}

const useCategoryStore = create<CategoryStore>()(
      devtools(
            persist(
                  (set) => ({
                        categories: categories,

                        addCategory: (category) =>
                              set(
                                    (state) => ({
                                          categories: [
                                                ...state.categories,
                                                {
                                                      category_id: Date.now().toString(),
                                                      ...category,
                                                },
                                          ],
                                    }),
                                    false,
                                    "category/addCategory"
                              ),

                        deleteCategory: (id) =>
                              set(
                                    (state) => ({
                                          categories: state.categories.filter(
                                                (cat) => cat.category_id !== id
                                          ),
                                    }),
                                    false,
                                    "category/deleteCategory"
                              ),

                        updateCategory: (id, updated) =>
                              set(
                                    (state) => {
                                          const updatedList = state.categories.map((cat) =>
                                                cat.category_id === id ? { ...cat, ...updated } : cat
                                          );


                                          return { categories: updatedList };
                                    },
                                    false,
                                    "category/updateCategory"
                              ),
                  }),
                  {
                        name: "CategoryStore",
                        store: "categoryStore",
                  }
            ))
);

export default useCategoryStore;
