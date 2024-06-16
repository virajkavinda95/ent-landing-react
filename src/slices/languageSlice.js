import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "English",
  translations: {
    sectionTwo: {
      en: "After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the incense smells, the outfits and the delicious food? But first, let’s get Eid-ready with our outfits.",
      ar: "بعد عام كامل من الانتظار بفارغ الصبر، ولكن بفارغ الصبر، جاء العيد أخيرًا! تسلم الأيدي لكل من اشتاق لروائح البخور والألبسة والطعام اللذيذ؟ لكن أولاً، دعونا نستعد للعيد بملابسنا.",
    },
    sectionThree: {
      en: "Now that we’re ready in our new Eid outfits, it’s time for Takbeer or Eid prayers. Let’s revel in this beautiful moment. Later, let’s join the family gathering and exchange warm greetings with loved ones.",
      ar: "الآن بعد أن استعدنا بملابس العيد الجديدة، حان وقت التكبير أو صلاة العيد. دعونا نستمتع بهذه اللحظة الجميلة. لاحقًا، دعونا ننضم إلى تجمع العائلة ونتبادل التهاني الحارة مع أحبائهم.",
    },
    sectionFour: {
      en: "After that much-needed family time, it’s the kids’ favourite part, Eideyah! Time for them to engage in friendly banter as to who received the most.",
      ar: "بعد هذا الوقت العائلي الذي تشتد الحاجة إليه، يأتي الجزء المفضل لدى الأطفال، العيدية! حان الوقت لهم للانخراط في مزاح ودي حول من حصل على أكبر قدر من المال.",
    },
    sectionFive: {
      en: "Next up, a treat for the eyes and a feast for the belly, it’s ‘Eid lunch’ with family. Although we might be missing a few due to food coma, there’s plenty of room for laughter and fun.",
      ar: "وبعد ذلك، متعة للعيون وليمة للبطن، إنها وجبة غداء العيد مع العائلة. على الرغم من أننا قد نفتقد بعضًا منها بسبب غيبوبة الطعام، إلا أن هناك مساحة كبيرة للضحك والمرح.",
    },
  },
};

const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("user-lang", JSON.stringify(action.payload));
    },
  },
});

export const { setLang } = LanguageSlice.actions;
export const selectTranslation = (state) =>
  state.language.translations[state.language.lang];

export default LanguageSlice.reducer;
