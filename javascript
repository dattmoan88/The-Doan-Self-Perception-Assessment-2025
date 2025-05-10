// script.js
const questions = [
    {
        question: "When you meet someone new, do you usually:",
        options: {
            a: "Smile and try to make eye contact?",
            b: "Watch them for a bit before saying anything?",
            c: "Feel shy and maybe look away?",
            d: "Say hello and ask them a question?"
        },
        name: "q1",
        scoring: { ApproachableOptimist: "a", ObservantThinker: "b", CautiousIntrospector: "c", HighlyExpressiveEnthusiasticInitiator: "d" }
    },
    {
        question: "In a group of people, are you more likely to:",
        options: {
            a: "Share your ideas and join in the talk?",
            b: "Listen to what others are saying?",
            c: "Only talk if you really have something to say?",
            d: "Try to make sure everyone feels included?"
        },
        name: "q2",
        scoring: { EngagingCommunicator: "a", ReflectiveListener: "b", QuietAnalyst: "c", WarmlyEngagingCollaborativeTeamPlayer: "d" }
    },
    {
        question: "How do you usually dress?",
        options: {
            a: "In clothes that are fun and make you stand out?",
            b: "In clothes that are comfortable and easy to wear?",
            c: "In clothes that look neat and tidy?",
            d: "In clothes that show your own unique style?"
        },
        name: "q3",
        scoring: { UnconventionalImaginativeCreativeVisionary: "a", PragmaticResourcefulProblemSolver: "b", StructuredPlanner: "c", CreativeIndividualist: "d" }
    },
    {
        question: "If there's a problem to solve, do you usually:",
        options: {
            a: "Try to fix it right away?",
            b: "Think about all the ways to solve it first?",
            c: "Ask someone else to help?",
            d: "Think of a few ideas and pick the best one?"
        },
        name: "q4",
        scoring: { DirectAchiever: "a", MethodicalDetailOrientedObserver: "b", EmpatheticSupporter: "c", IntellectuallyCuriousAbstractConceptualizer: "d" }
    },
    {
        question: "When you talk to people, do you often:",
        options: {
            a: "Use your hands and change your voice a lot?",
            b: "Keep your body still and speak calmly?",
            c: "Move around or fidget a bit?",
            d: "Look at them and show you are listening?"
        },
        name: "q5",
        scoring: { HighlyExpressiveEnthusiasticInitiator: "a", QuietAnalyst: "b", SociallyAnxiousHighlySensitiveReactor: "c", DeeplyEmpatheticNurturingSupporter: "d" }
    },
    {
        question: "If someone tells you something you could do better, do you:",
        options: {
            a: "Try to understand why and learn from it?",
            b: "Feel bad or upset?",
            c: "Think about it to see if it makes sense?",
            d: "Thank them for telling you?"
        },
        name: "q6",
        scoring: { IntellectuallyCuriousAbstractConceptualizer: "a", SociallyAnxiousHighlySensitiveReactor: "b", ObjectiveReasoner: "c", ConsiderateSupporter: "d" }
    },
    {
        question: "When you are at a party or gathering, do you usually feel:",
        options: {
            a: "Full of energy and enjoy talking to many people?",
            b: "Okay just watching what's happening?",
            c: "Like you want to find a quiet spot?",
            d: "Happy to talk to a few people you know?"
        },
        name: "q7",
        scoring: { OutgoingEntertainer: "a", AloofIndependentMinimalist: "b", PrivateIntrospective: "c", WarmConnector: "d" }
    },
    {
        question: "When you need to make a big choice, do you mostly go with:",
        options: {
            a: "What feels right in your gut?",
            b: "What makes the most sense logically?",
            c: "What someone you trust tells you to do?",
            d: "A mix of what feels right and what makes sense?"
        },
        name: "q8",
        scoring: { SpontaneousAdventurer: "a", MethodicalDetailOrientedObserver: "b", EmpatheticSupporter: "c", AdaptableImproviser: "d" }
    },
    {
        question: "When you talk to people, is your voice usually:",
        options: {
            a: "Lively and gets their attention?",
            b: "Clear and to the point?",
            c: "Soft and gentle?",
            d: "Thoughtful and careful?"
        },
        name: "q9",
        scoring: { HighlyExpressiveEnthusiasticInitiator: "a", DirectAchiever: "b", DeeplyEmpatheticNurturingSupporter: "c", ReflectiveListener: "d" }
    },
    {
        question: "If you don't agree with someone, do you usually:",
        options: {
            a: "Tell them why you think they are wrong?",
            b: "Try to find some common ground?",
            c: "Just keep your opinion to yourself?",
            d: "Explain your view calmly and ask about theirs?"
        },
        name: "q10",
        scoring: { ForcefulOpinionatedDebater: "a", GentleMediator: "b", PrivateIntrospective: "c", DiplomaticMediator: "d" }
    },
    {
        question: "When you talk about things that have happened to you, do you focus on:",
        options: {
            a: "The exciting or important parts?",
            b: "How you felt about it?",
            c: "What you did and what happened step-by-step?",
            d: "Who was there and how it affected your relationships?"
        },
        name: "q11",
        scoring: { OutgoingEntertainer: "a", EmotionallyAttunedMirroringResponder: "b", StructuredPlanner: "c", WarmConnector: "d" }
    },
    {
        question: "If someone is very sad, do you usually:",
        options: {
            a: "Try to cheer them up?",
            b: "Listen to them and let them know you understand?",
            c: "Try to find a solution to their problem?",
            d: "Feel unsure of what to do?"
        },
        name: "q12",
        scoring: { PlayfulLightheartedSocialCatalyst: "a", DeeplyEmpatheticNurturingSupporter: "b", PragmaticResourcefulProblemSolver: "c", SociallyAnxiousHighlySensitiveReactor: "d" }
    },
    {
        question: "When you try something new, are you usually:",
        options: {
            a: "Excited to see what happens?",
            b: "Careful and want to know all about it first?",
            c: "A little worried or unsure?",
            d: "Focused on how it works and what you can learn?"
        },
        name: "q13",
        scoring: { SpontaneousAdventurer: "a", CautiousObservationalLearner: "b", SociallyAnxiousHighlySensitiveReactor: "c", IntellectuallyCuriousAbstractConceptualizer: "d" }
    },
    {
        question: "If you are working with a group, are you most likely to:",
        options: {
            a: "Take charge and help everyone know what to do?",
            b: "Help others and make sure everyone is doing okay?",
            c: "Focus on your own part of the work?",
            d: "Come up with new and different ideas?"
        },
        name: "q14",
        scoring: { DecisiveResultsFocusedLeader: "a", WarmlyEngagingCollaborativeTeamPlayer: "b", AloofIndependentMinimalist: "c", UnconventionalImaginativeCreativeVisionary: "d" }
    },
    {
        question: "When you tell a joke, is it usually:",
        options: {
            a: "Loud and silly?",
            b: "Quiet and a bit clever?",
            c: "Kind and gentle?",
            d: "About ideas or words?"
        },
        name: "q15",
        scoring: { OutgoingEntertainer: "a", QuietAnalyst: "b", DeeplyEmpatheticNurturingSupporter: "c", IntellectuallyCuriousAbstractConceptualizer: "d" }
    },
    {
        question: "If you make a mistake, do you usually:",
        options: {
            a: "Try to fix it quickly?",
            b: "Think about why it happened?",
            c: "Feel bad about it?",
            d: "Say sorry?"
        },
        name: "q16",
        scoring: { PragmaticResourcefulProblemSolver: "a", MethodicalDetailOrientedObserver: "b", SociallyAnxiousHighlySensitiveReactor: "c", ConsiderateSupporter: "d" }
    },
    {
        question: "When you are with other people, do you usually have:",
        options: {
            a: "A lot of energy and talk a lot?",
            b: "A steady amount of energy?",
            c: "Not much energy and feel tired easily?",
            d: "Energy that changes depending on who you are with?"
        },
        name: "q17",
        scoring: { HighlyExpressiveEnthusiasticInitiator: "a", ApproachableOptimist: "b", PrivateIntrospective: "c", EmotionallyAttunedMirroringResponder: "d" }
    },
    {
        question: "When you learn something new, do you like to:",
        options: {
            a: "Try it out right away?",
            b: "Read about it or watch a video first?",
            c: "Have someone show you how to do it?",
            d: "Talk about it with someone else?"
        },
        name: "q18",
        scoring: { SpontaneousAdventurer: "a", CautiousObservationalLearner: "b", EmpatheticSupporter: "c", WarmlyEngagingCollaborativeTeamPlayer: "d" }
    },
    {
        question: "People often tell you that you are:",
        options: {
            a: "Outgoing and friendly.",
            b: "Quiet and thoughtful.",
            c: "Someone they can count on.",
            d: "Creative and have good ideas."
        },
        name: "q19",
        scoring: { WarmConnector: "a", ReflectiveListener: "b", StructuredPlanner: "c", UnconventionalImaginativeCreativeVisionary: "d" }
    },
    {
        question: "When you have a lot to do and not much time, do you:",
        options: {
            a: "Work faster and try to get it all done?",
            b: "Make a list and plan what to do first?",
            c: "Feel stressed and find it hard to start?",
            d: "Ask for help or try to share the work?"
        },
        name: "q20",
        scoring: { DirectAchiever: "a", StructuredPlanner: "b", SociallyAnxiousHighlySensitiveReactor: "c", WarmlyEngagingCollaborativeTeamPlayer: "d" }
    },
    {
        question: "When you show your feelings, is it usually:",
        options: {
            a: "Easy for people to see what you are feeling?",
            b: "Something you keep mostly to yourself?",
            c: "It depends on who you are with?",
            d: "More in your actions than your words?"
        },
        name: "q21",
        scoring: { HighlyExpressiveEnthusiasticInitiator: "a", PrivateIntrospective: "b", AdaptableImproviser: "c", PragmaticResourcefulProblemSolver: "d" }
    },
    {
        question: "You are usually drawn to people who are:",
        options: {
            a: "Fun and like to do exciting things?",
            b: "Calm and think things through?",
            c: "Kind and care about others?",
            d: "Smart and have interesting things to say?"
        },
        name: "q22",
        scoring: { SpontaneousAdventurer: "a", MethodicalDetailOrientedObserver: "b", DeeplyEmpatheticNurturingSupporter: "c", IntellectuallyCuriousAbstractConceptualizer: "d" }
    },
    {
        question: "In your free time, you mostly enjoy:",
        options: {
            a: "Being with friends or family?",
            b: "Doing things on your own, like hobbies?",
            c: "Being active, like sports or being outside?",
            d: "Learning about things that interest you?"
        },
        name: "q23",
        scoring: { WarmConnector: "a", AloofIndependentMinimalist: "b", EnergeticThrillSeekingSpontaneousAdventurer: "c", IntellectuallyCuriousAbstractConceptualizer: "d" }
    },
    {
        question: "When you are talking with someone, do you usually:",
        options: {
            a: "Do most of the talking?",
            b: "Do more listening than talking?",
            c: "Talk about the same amount?",
            d: "Focus on asking them a lot of questions?"
        },
        name: "q24",
        scoring: { ForcefulOpinionatedDebater: "a", ReflectiveListener: "b", ApproachableOptimist: "c", WarmlyEngagingCollaborativeTeamPlayer: "d" }
    },
    {
        question: "What do you think about rules?",
        options: {
            a: "They should be questioned if they don't make sense?",
            b: "They are important to follow?",
            c: "Sometimes you can bend them a little?",
            d: "They don't always apply to you?"
        },
        name: "q25",
        scoring: { BoldChallenger: "a", StructuredPlanner: "b", AdaptableImproviser: "c", ForcefulOpinionatedDebater: "d" }
    },
    {
        question: "If someone is angry at you, do you usually:",
        options: {
            a: "Get angry back?",
            b: "Try to see why they are upset?",
            c: "Feel scared or want to get away?",
            d: "Try to fix what you did wrong?"
        },
        name: "q26",
        scoring: { ForcefulOpinionatedDebater: "a", DeeplyEmpatheticNurturingSupporter: "b", SociallyAnxiousHighlySensitiveReactor: "c", PragmaticResourceful
