import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, Trophy, Activity, Dna, Zap, Layers, Microscope, RefreshCw, ChevronRight, ChevronDown, ArrowLeft } from 'lucide-react';

const topics = {
  membrane: {
    id: 'membrane',
    title: 'קרום התא ומעבר חומרים',
    icon: <Layers size={24} />,
    color: 'bg-blue-100 text-blue-600',
    summary: [
      'מבנה קרום התא (מודל הפסיפס הנוזלי): בנוי משכבה כפולה של פוספוליפידים (ראש הידרופילי כלפי חוץ וזנב הידרופובי כלפי פנים) בה משובצים חלבונים (תעלות, נשאים, משאבות, קולטנים) וסוכרים לזיהוי.',
      'בררנות הקרום: הקרום מאפשר מעבר חופשי של מולקולות קטנות ולא טעונות (כמו חמצן ופד"ח), אך חוסם או מבקר מעבר של מולקולות גדולות (כמו גלוקוז) או טעונות (יונים).',
      'דיפוזיה (פעפוע): מעבר פסיבי של חומר ממקום ריכוז גבוה למקום ריכוז נמוך עד להשוואת ריכוזים. נובע מהתנועה האקראית של המולקולות ולא דורש אנרגיה.',
      'אוסמוזה: מעבר מים דרך קרום בררני מתמיסה היפוטונית (ריכוז מומסים נמוך/הרבה מים) לתמיסה היפרטונית (ריכוז מומסים גבוה/מעט מים). יוצר לחץ טורגור בצמחים.',
      'העברה פעילה (אקטיבית): מעבר חומרים בניגוד למפל הריכוזים (מנמוך לגבוה). דורש השקעת אנרגיה (ATP) ומבוצע ע"י משאבות חלבוניות (למשל משאבת נתרן-אשלגן).',
      'אנדוציטוזה ואקסוציטוזה: מנגנוני הכנסה והוצאה של מולקולות ענק (כמו חלבונים) באמצעות שלפוחיות הנוצרות מהקרום.',
      'הומיאוסטזיס: הקרום חיוני לשמירה על סביבה פנימית יציבה ושונה מהסביבה החיצונית.'
    ]
  },
  metabolism: {
    id: 'metabolism',
    title: 'פוטוסינתזה ונשימה תאית',
    icon: <Zap size={24} />,
    color: 'bg-green-100 text-green-600',
    summary: [
      'מטבוליזם (חילוף חומרים): סך כל התגובות הכימיות בתא (פירוק ובנייה). מקור האנרגיה הראשוני הוא השמש (לאוטוטרופים) או מזון אורגני (להטרוטרופים).',
      'פוטוסינתזה (הטמעה): תהליך המרת אנרגיית אור לאנרגיה כימית (גלוקוז). מתרחש בכלורופלסט בנוכחות פיגמנט הכלורופיל. ניסוח: פחמן דו-חמצני + מים + אור -> גלוקוז + חמצן.',
      'נשימה תאית אירובית: תהליך הפקת אנרגיה (ATP) מפירוק גלוקוז בנוכחות חמצן. מתרחש במיטוכונדריה. מניב אנרגיה רבה (כ-30 ATP למולקולת גלוקוז).',
      'ATP (אדנוזין טרי-פוספט): "מטבע האנרגיה" של התא. מתווך בין תהליכים משחררי אנרגיה לתהליכים צורכי אנרגיה.',
      'גליקוליזה: השלב הראשון בפירוק הגלוקוז, מתרחש בציטופלסמה ואינו דורש חמצן. תוצר: חומצה פירובית ומעט ATP.',
      'תסיסה (נשימה אנאירובית): מסלול להפקת אנרגיה ללא חמצן בציטופלסמה. פחות יעילה מנשימה אירובית. סוגים עיקריים: תסיסה לקטית (בשרירים/חיידקים - יוצרת חומצת חלב) ותסיסה כוהלית (בשמרים - יוצרת אתנול ו-CO2).'
    ]
  },
  structure: {
    id: 'structure',
    title: 'מבנה התא והרכבו',
    icon: <Microscope size={24} />,
    color: 'bg-purple-100 text-purple-600',
    summary: [
      'תיאוריית התא: כל היצורים החיים בנויים מתאים, וכל תא נוצר מתא קודם.',
      'יחס שטח פנים לנפח: ככל שהתא קטן יותר, היחס בין שטח הפנים לנפח גדול יותר, מה שמייעל את מעבר החומרים אל התא וממנו.',
      'פרוקריוטים (כגון חיידקים): תאים קטנים ללא גרעין מוגדר וללא אברונים קרומיים. ה-DNA מעגלי ונמצא בציטופלסמה (באזור הנוקלאואיד).',
      'אאוקריוטים (בע"ח, צמחים, פטריות): תאים גדולים ומורכבים בעלי גרעין ואברונים מוקפי קרום (מידור), המאפשרים ביצוע תהליכים שונים במקביל.',
      'אברונים מרכזיים: גרעין (מכיל את המידע התורשתי), ריבוזומים (אתר ייצור החלבונים), רשת תוך-תאית (הובלה ועיבוד חומרים), גולג\'י (אריזה והפרשה), מיטוכונדריה (תחנת הכוח).',
      'ייחודי לתא צמח: דופן תא (עשויה תאית, מקנה יציבות והגנה מפני התפוצצות באוסמוזה), כלורופלסט (פוטוסינתזה), חלולית מרכזית (מאגר מים ומומסים, שמירה על לחץ טורגור).',
      'שלד התא: רשת סיבי חלבון המקנה לתא צורה, מאפשרת תנועת אברונים וחיונית לחלוקת התא.'
    ]
  },
  dna: {
    id: 'dna',
    title: 'DNA ושכפולו',
    icon: <Dna size={24} />,
    color: 'bg-red-100 text-red-600',
    summary: [
      'מבנה ה-DNA: סליל כפול (Double Helix) המורכב משני גדילים משלימים והפוכים בכיווניותם (Antiparallel). יחידת המבנה היא הנוקלאוטיד.',
      'נוקלאוטיד: מורכב משלושה חלקים: סוכר (דאוקסי-ריבוז), זרחה (פוספט) ובסיס חנקני.',
      'כללי זיווג בסיסים: ארבעה סוגי בסיסים - אדנין (A), תימין (T), גואנין (G), ציטוזין (C). החיבור הוא ספציפי: A תמיד מול T (שני קשרי מימן), G תמיד מול C (שלושה קשרי מימן).',
      'כרומוזומים: ה-DNA מלופף סביב חלבונים (היסטונים) ונדחס למבנה הנקרא כרומוזום. בתא גוף באדם יש 46 כרומוזומים (23 זוגות).',
      'שכפול DNA: תהליך חצי-משמר המתרחש באינטרפאזה (לפני חלוקת התא). אנזימים פותחים את הסליל וכל גדיל משמש תבנית לבניית גדיל משלים חדש.',
      'מוטציה: שינוי ברצף הבסיסים ב-DNA. יכולה להיות נקודתית (החלפה/החסרה/הוספה). מוטציות הן המקור לשונות גנטית ולאבולוציה, אך יכולות גם לגרום למחלות.',
      'הקוד הגנטי: סדר הבסיסים ב-DNA קובע את סדר החומצות האמיניות בחלבון (גן = מתכון לחלבון).'
    ]
  },
  enzymes: {
    id: 'enzymes',
    title: 'אנזימים',
    icon: <Activity size={24} />,
    color: 'bg-yellow-100 text-yellow-600',
    summary: [
      'אנזימים: חלבונים המשמשים כזרזים ביולוגיים. הם מורידים את אנרגיית השפעול הדרושה לתגובה ובכך מאיצים את קצבה פי מיליונים. האנזים לא מתפרק בתגובה.',
      'מבנה ותפקוד: לכל אנזים מבנה מרחבי ייחודי ו"אתר פעיל" אליו מתאים הסובסטרט (המצע) באופן ספציפי (כמו מפתח למנעול או התאמה מושרית).',
      'ספציפיות: כל אנזים פועל על סובסטרט אחד מסוים או על קבוצה מצומצמת של חומרים דומים.',
      'דנטורציה: שינוי בלתי הפיך במבנה המרחבי של האנזים (ובעיקר באתר הפעיל) הגורם לאובדן פעילותו. נגרם לרוב עקב טמפרטורה גבוהה מדי או pH קיצוני.',
      'גורמים משפיעים על הקצב: טמפרטורה (עלייה מתונה מגבירה קצב עד לטמפ\' המיטבית, מעבר לה יש דנטורציה), pH (לכל אנזים pH מיטבי), ריכוז אנזים/סובסטרט (הקצב עולה עד לנקודת רוויה).',
      'מעכבים: חומרים המאיטים או עוצרים את פעילות האנזים. מעכב תחרותי (מתחרה עם הסובסטרט על האתר הפעיל) ומעכב לא-תחרותי (נקשר לאתר אחר ומשנה את מבנה האנזים).'
    ]
  }
};

const questionsBank = [
  // Membrane
  {
    topic: 'membrane',
    question: 'מה יקרה לתא בעל חיים שיוכנס לתמיסה היפוטונית (ריכוז מומסים נמוך מהתא)?',
    options: [
      'התא יתכווץ עקב יציאת מים (פלסמוליזה)',
      'לא יחול שינוי בנפח התא',
      'מים יכנסו לתא באוסמוזה והוא עלול להתפוצץ',
      'התא יהפוך לתא צמח'
    ],
    correct: 2,
    explanation: 'בתמיסה היפוטונית, ריכוז המים בחוץ גבוה יותר מאשר בפנים. מים יכנסו לתא באוסמוזה, ובאין דופן (כמו בתא בע"ח), התא יתנפח ועלול להתפוצץ.'
  },
  {
    topic: 'membrane',
    question: 'איזה מהתהליכים הבאים דורש השקעת אנרגיה (ATP)?',
    options: [
      'דיפוזיה של חמצן דרך הפוספוליפידים',
      'אוסמוזה של מים',
      'העברה פעילה באמצעות משאבות',
      'דיפוזיה מואצת דרך תעלות'
    ],
    correct: 2,
    explanation: 'העברה פעילה נעשית כנגד מפל הריכוזים (מריכוז נמוך לגבוה) ולכן מחייבת השקעת אנרגיה.'
  },
  // Metabolism
  {
    topic: 'metabolism',
    question: 'מהו התוצר העיקרי של תהליך הנשימה התאית שמשמש כמטבע האנרגיה של התא?',
    options: [
      'גלוקוז',
      'ATP',
      'חמצן',
      'עמילן'
    ],
    correct: 1,
    explanation: 'מטרת הנשימה התאית היא לפרק חומרים אורגניים כדי להפיק מולקולות ATP, המשמשות לאספקת אנרגיה לתהליכי החיים.'
  },
  {
    topic: 'metabolism',
    question: 'היכן מתרחש שלב הגליקוליזה?',
    options: [
      'במיטוכונדריה',
      'בגרעין התא',
      'בכלורופלסט',
      'בציטופלסמה'
    ],
    correct: 3,
    explanation: 'הגליקוליזה היא השלב הראשון בפירוק הגלוקוז ומתרחשת בנוזל התא (הציטופלסמה), לפני הכניסה למיטוכונדריה.'
  },
  // Structure
  {
    topic: 'structure',
    question: 'מהו ההבדל העיקרי בין תא פרוקריוטי לתא אאוקריוטי?',
    options: [
      'לתא פרוקריוטי יש דופן ולתא אאוקריוטי אין',
      'בתא אאוקריוטי החומר התורשתי עטוף בקרום גרעין, ובפרוקריוטי הוא בציטופלסמה',
      'תא פרוקריוטי גדול יותר מתא אאוקריוטי',
      'רק לתא פרוקריוטי יש ריבוזומים'
    ],
    correct: 1,
    explanation: 'ההבדל המגדיר הוא קיום גרעין תא מוגדר ואברונים קרומיים בתאים אאוקריוטים (כמו בע"ח וצמחים), לעומת היעדרם בפרוקריוטים (חיידקים).'
  },
  {
    topic: 'structure',
    question: 'איזה אברון אחראי על ייצור חלבונים בתא?',
    options: [
      'מיטוכונדריה',
      'ליזוזום',
      'ריבוזום',
      'מנגנון גולג\'י'
    ],
    correct: 2,
    explanation: 'הריבוזומים הם "מפעל החלבונים" של התא, בהם מתורגם המידע הגנטי לרצף של חומצות אמיניות.'
  },
  // DNA
  {
    topic: 'dna',
    question: 'מהם אבני הבניין של ה-DNA?',
    options: [
      'חומצות אמיניות',
      'חומצות שומן',
      'חד-סוכרים',
      'נוקלאוטידים'
    ],
    correct: 3,
    explanation: 'ה-DNA בנוי משרשרת של נוקלאוטידים. כל נוקלאוטיד מורכב מסוכר, זרחה ובסיס חנקני.'
  },
  {
    topic: 'dna',
    question: 'מתי מתרחש שכפול ה-DNA במחזור התא?',
    options: [
      'בזמן המיטוזה (חלוקת התא)',
      'בשלב האינטרפאזה (לפני החלוקה)',
      'מיד אחרי שהתא מתחלק',
      'בזמן יצירת חלבונים בלבד'
    ],
    correct: 1,
    explanation: 'ה-DNA חייב להשתכפל לפני שהתא מתחיל להתחלק, כדי שכל תא בת יקבל עותק מלא של המידע הגנטי. שלב זה נקרא אינטרפאזה.'
  },
  // Enzymes
  {
    topic: 'enzymes',
    question: 'מה קורה לאנזים בטמפרטורה גבוהה מאוד?',
    options: [
      'הוא פועל מהר יותר ללא גבול',
      'הוא עובר דנטורציה (הרס מבני) ופעילותו נפסקת',
      'הוא הופך לסובסטרט',
      'לא קורה לו כלום כי הוא יציב מאוד'
    ],
    correct: 1,
    explanation: 'טמפרטורה גבוהה מדי גורמת לשבירת קשרים במבנה המרחבי של החלבון (אנזים), תהליך הנקרא דנטורציה, והאנזים מאבד את יכולתו לפעול.'
  },
  {
    topic: 'enzymes',
    question: 'מה מאפיין מעכב תחרותי?',
    options: [
      'הוא נקשר לאתר הפעיל ומונע מהסובסטרט להיקשר',
      'הוא מפרק את האנזים',
      'הוא משנה את מבנה האנזים מאזור אחר (לא האתר הפעיל)',
      'הוא הופך את התוצר בחזרה לסובסטרט'
    ],
    correct: 0,
    explanation: 'מעכב תחרותי דומה במבנהו לסובסטרט ולכן מתחרה איתו על הקישור לאתר הפעיל של האנזים.'
  }
];

// Shuffle helper
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function CellReviewApp() {
  const [view, setView] = useState('home'); // home, learn, quiz, result
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

  const startQuiz = () => {
    const shuffled = shuffleArray(questionsBank); // Get random mix
    setQuizQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setView('quiz');
  };

  const handleAnswer = (index) => {
    if (showExplanation) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizQuestions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    } else {
      setView('result');
    }
  };

  const toggleTopic = (id) => {
    setOpenTopic(openTopic === id ? null : id);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="text-center space-y-4">
        <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4 shadow-lg">
          <Microscope size={48} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">חזרה למבחן: הביולוגיה של התא</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          תרגול וחזרה על בסיס החומרים שהעלית: קרום התא, מטבוליזם, מבנה התא, DNA ואנזימים.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
        <button 
          onClick={() => setView('learn')}
          className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 group"
        >
          <BookOpen size={48} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold text-gray-800">חזרה על החומר</h2>
          <p className="text-gray-500 mt-2 text-center">סיכומים מורחבים ומפורטים לקראת הבחינה</p>
        </button>

        <button 
          onClick={startQuiz}
          className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500 group"
        >
          <Trophy size={48} className="text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold text-gray-800">בחן את עצמך</h2>
          <p className="text-gray-500 mt-2 text-center">שאלות אמריקאיות לתרגול הידע שלך</p>
        </button>
      </div>
    </div>
  );

  const renderLearn = () => (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <button onClick={() => setView('home')} className="p-2 hover:bg-gray-100 rounded-full ml-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-3xl font-bold text-gray-800">סיכום החומר</h2>
      </div>
      
      <div className="space-y-4">
        {Object.values(topics).map((topic) => (
          <div key={topic.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <button 
              onClick={() => toggleTopic(topic.id)}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-right"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${topic.color}`}>
                  {topic.icon}
                </div>
                <span className="text-xl font-bold text-gray-800">{topic.title}</span>
              </div>
              {openTopic === topic.id ? <ChevronDown className="text-gray-400" /> : <ChevronRight className="text-gray-400" />}
            </button>
            
            {openTopic === topic.id && (
              <div className="p-6 pt-0 bg-white animate-fadeIn">
                <div className="h-px w-full bg-gray-100 mb-4"></div>
                <ul className="space-y-3">
                  {topic.summary.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const question = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setView('home')} className="text-gray-500 hover:text-gray-800 flex items-center gap-1">
            <ArrowLeft size={20} /> יציאה
          </button>
          <span className="font-bold text-gray-600">שאלה {currentQuestionIndex + 1} מתוך {quizQuestions.length}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-grow">
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-blue-600 uppercase tracking-wide">
             {topics[question.topic].icon}
             {topics[question.topic].title}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let btnClass = "w-full p-4 text-right rounded-xl border-2 transition-all flex items-center justify-between group ";
              
              if (showExplanation) {
                if (idx === question.correct) btnClass += "border-green-500 bg-green-50 text-green-700";
                else if (idx === selectedAnswer) btnClass += "border-red-500 bg-red-50 text-red-700";
                else btnClass += "border-gray-100 text-gray-400";
              } else {
                btnClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700";
              }

              return (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showExplanation}
                  className={btnClass}
                >
                  <span className="font-medium text-lg">{option}</span>
                  {showExplanation && idx === question.correct && <CheckCircle className="text-green-500" />}
                  {showExplanation && idx === selectedAnswer && idx !== question.correct && <XCircle className="text-red-500" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <BookOpen size={18} />
                הסבר:
              </h4>
              <p className="text-blue-900">{question.explanation}</p>
              <button 
                onClick={nextQuestion}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? 'השאלה הבאה' : 'לתוצאות'}
                <ArrowLeft size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = '';
    if (percentage === 100) message = 'מצוין! שלטת בחומר לחלוטין.';
    else if (percentage >= 80) message = 'עבודה מעולה! יש לך ידע חזק.';
    else if (percentage >= 60) message = 'טוב מאוד, אך יש מקום לשיפור.';
    else message = 'כדאי לחזור שוב על הסיכומים ולנסות שנית.';

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full">
          <div className="mb-6 inline-flex p-6 rounded-full bg-yellow-100 text-yellow-500">
            <Trophy size={64} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">התוצאה שלך</h2>
          <div className="text-6xl font-black text-blue-600 mb-4">{percentage}%</div>
          <p className="text-gray-500 text-lg mb-8">{score} תשובות נכונות מתוך {quizQuestions.length}</p>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <p className="text-gray-700 font-medium">{message}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={startQuiz}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              נסה שוב
            </button>
            <button 
              onClick={() => setView('home')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors"
            >
              חזרה לתפריט הראשי
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {view === 'home' && renderHome()}
      {view === 'learn' && renderLearn()}
      {view === 'quiz' && renderQuiz()}
      {view === 'result' && renderResult()}
    </div>
  );
}

