// হ্যাঁ, Problem 2: Odd or Even Finder — এটা আগের মতোই তোমার জন্য রেডি আছে! 💡

// তোমাকে isOddOrEven() নামে একটা ফাংশন লিখতে হবে, যা ইনপুট হিসেবে একটি সংখ্যা নেবে এবং বলবে সেটি Odd (বিজোড়) নাকি Even (জোড়)।

// ✅ প্রশ্নের শর্ত:
// ইনপুট যদি সংখ্যা না হয়, তাহলে "Invalid" রিটার্ন করবে।
// সংখ্যা জোড় হলে "Even" রিটার্ন করবে।
// সংখ্যা বিজোড় হলে "Odd" রিটার্ন করবে।

function isOddOrEven(numbers){
    if( typeof numbers !== 'number'){
        return 'Invalid';
    }
    if(numbers % 2 === 0){
        return 'Even'
    }
    else{
        'Odd'
    }
}
