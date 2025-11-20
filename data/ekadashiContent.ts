
import { EkadashiInfo } from '../types';

// Interface matching the user's provided data structure
interface DeepStory {
  id: string;
  name: string;
  month: string;
  paksha: string;
  dialogue_intro: string;
  story: string;
}

const EKADASHI_DEEP_STORIES: DeepStory[] = [
  // ============================================================
  // ADHIK MAAS (The Extra Leap Month - Occurs every ~2.5 years)
  // ============================================================
  {
    id: "adhika_s",
    name: "Padmini (Kamala) Ekadashi",
    month: "Adhika",
    paksha: "Shukla",
    dialogue_intro: "The saintly King Yudhishthira Maharaj said, 'O Janardana, You have described the glories of all the Ekadashis that occur during the twelve months. However, I now wish to hear about the Ekadashi that occurs during the extra, leap-year month (Adhika Masa). What is its name, and what is the procedure for observing it?'",
    story: `The Supreme Personality of Godhead, Lord Sri Krishna, replied: "O King, the Ekadashi that occurs during the Shukla Paksha of the Adhika Masa is called Padmini Ekadashi. It is also known as Kamala Ekadashi. It is the most sacred day, so powerful that even Lord Brahma cannot fully describe its glories. One who observes this fast with strict discipline returns to My personal abode. Listen carefully as I narrate a history that Pulastya Muni once told to Narada Muni.

    In the Treta Yuga, there was a powerful king named Kritavirya who ruled the kingdom of Mahishmati. He had one thousand wives, but despite this, he had no son to inherit his throne. Desperate and unhappy, the King decided to perform severe penance. He entrusted his kingdom to his ministers and entered the Gandhamadana forest. His chief queen, Padmini, who was the daughter of the truthful King Harishchandra, accompanied him. For ten thousand years, they performed rigorous austerities, meditating and eating only roots and water, yet the blessing of a son did not come.

    Seeing the King’s body wasting away, Queen Padmini approached the chaste Anasuya, the wife of the great Sage Atri. Padmini asked, 'O Mother, my husband has performed penance for ten thousand years, yet the Lord has not blessed us. Is there any vow that can please Lord Keshava quickly?'

    The chaste Anasuya replied, 'O vivid Queen, the extra month (Adhika Masa) is currently ongoing. In this month, there is an Ekadashi known as Padmini. It is the most dear to Lord Vishnu. If you observe this fast by staying awake all night and strictly avoiding grains and water, Lord Hari will grant you whatever you desire.'

    Hearing this, Queen Padmini observed the fast exactly as instructed. Lord Vishnu, riding on Garuda, appeared before them and asked them to choose a boon. The King asked for a son who would be unconquerable by humans, demons, or demigods. The Lord granted the boon. Soon after, Padmini gave birth to a son named Kartavirya Arjuna (Sahasrarjuna), who became the most powerful warrior on earth, even defeating Ravana. Such is the power of Padmini Ekadashi."`
  },
  {
    id: "adhika_k",
    name: "Parama Ekadashi",
    month: "Adhika",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj said, 'O Supreme Lord, what is the name of the Ekadashi that occurs during the dark fortnight (Krishna Paksha) of the Adhika Masa? Please tell me its history and significance.'",
    story: `Lord Krishna replied: "O Yudhishthira, this meritorious day is called Parama Ekadashi. It destroys all sins and removes the misery of poverty. The history of this fast was once narrated to the sages in the city of Kampilya.

    In Kampilya, there lived a devout Brahmin named Sumedha and his wife, Pavitra. Sumedha was extremely poor; he often had to beg for food, and sometimes he received nothing at all. Despite their poverty, his wife Pavitra was completely devoted to him. She would often go hungry herself to feed a guest or her husband. Her face, though pale from hunger, always shone with the brightness of her chastity.

    One day, Sumedha said to her, 'My dear wife, I beg from the rich but get nothing. I am thinking of traveling to a foreign land to earn wealth.' Pavitra, with tears in her eyes, replied, 'O Lord of my life, scriptures say that wealth in this life is the result of charity given in previous lives. If we have not given charity, we will not find wealth even if we go to Mount Meru. Please do not leave me. Let us stay here and serve the Lord.'

    A few days later, the great Sage Kaundinya arrived at their humble hut. Sumedha and Pavitra offered him the best seat they had and gave him the little food they had saved. The sage was pleased by their hospitality despite their poverty. Pavitra asked, 'O learned one, how can we be free from this terrible poverty?'

    Sage Kaundinya closed his eyes in meditation and said, 'There is a fast that acts like a hammer to the rock of poverty. It is Parama Ekadashi, which occurs during the dark fortnight of the extra month. Lord Kubera, the treasurer of the gods, became wealthy because he observed this fast. King Harishchandra regained his lost kingdom because of this fast. You must observe it.'

    Sumedha and Pavitra observed the Parama Ekadashi with full faith, staying awake all night chanting Vishnu's names. The next morning, a prince from the royal palace arrived, inspired by a dream. He gave them a fully furnished house, an entire village for their income, and cows. Thus, their poverty vanished instantly, and at the end of their lives, they attained Vaikuntha."`
  },

  // ============================================================
  // CHAITRA (March/April)
  // ============================================================
  {
    id: "chaitra_k",
    name: "Papmochani Ekadashi",
    month: "Chaitra",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj asked, 'O Lord of Lords, Sri Krishna, please be kind to me and describe the Ekadashi that falls in the dark fortnight of the month of Chaitra.'",
    story: `Lord Krishna replied: "O best of Kings, this Ekadashi is called Papmochani, which means 'The Remover of Sin.' Its history was once narrated to King Mandhata by Lomasa Rishi.

    Many ages ago, the Chaitraratha forest was a place of great beauty, filled with flowers and fruits. It was a favorite spot for the Gandharvas and Apsaras. In this forest, a young sage named Medhavi was performing severe penance. He was a devotee of Lord Shiva. The Apsara Manjughosha saw the handsome young sage and desired to distract him from his austerities. She built a small hut nearby and began to sing sweetly.

    One day, as Medhavi sat in meditation, Manjughosha approached him. Her beauty, combined with the fragrant breeze and her melodious singing, captivated the sage. Cupid (Kamadeva) saw his opportunity and struck the sage with his arrows of lust. Medhavi abandoned his meditation and became absorbed in the beauty of Manjughosha.

    They lived together in the forest for what seemed to the sage like a few days. In reality, 57 years passed. One day, Manjughosha said, 'O Lord, I have stayed with you for a long time. Please permit me to return to the heavenly planets.' The sage, suddenly snapping out of his illusion, asked, 'How long have you been here?' When he realized it had been 57 years, his accumulated merit was destroyed. He became furious, his eyes turning red with anger. He cursed her, 'You have destroyed my tapasya! You are a witch! Become a ghost (Pisachini) immediately!'

    Manjughosha fell at his feet, weeping. 'O Sage, please forgive me. I served you for so long. Please tell me a way to be free from this curse.' Medhavi, feeling some pity, said, 'The curse can only be lifted if you observe Papmochani Ekadashi.'

    The sage then returned to his father, the great Sage Chyavana. Seeing his son devoid of tejas (spiritual light), Chyavana asked what happened. Medhavi confessed his fall. Chyavana said, 'Alas, you have committed a sin by associating with her, but you also committed a sin by cursing her in anger. You must also observe Papmochani Ekadashi to regain your lost merit.'

    Both Medhavi and Manjughosha observed this fast. The Apsara was freed from her ghostly body and returned to heaven, and Medhavi’s sins were washed away, restoring his status as a great sage."`
  },
  {
    id: "chaitra_s",
    name: "Kamada Ekadashi",
    month: "Chaitra",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira Maharaj said, 'O Lord, I would like to hear about the Ekadashi that occurs during the bright fortnight of Chaitra. What is its name and significance?'",
    story: `Lord Sri Krishna replied: "O Yudhishthira, this Ekadashi is called Kamada Ekadashi, the fulfiller of all desires. It has the power to nullify even the sin of killing a Brahmin, but it is most famous for removing curses. Hear this history from the Puranas.

    Once, there was a beautiful city called Ratnapura, ruled by King Pundarika. The city was inhabited by many Gandharvas, Kinnaras, and Apsaras. Among them was a famous Gandharva singer named Lalit and his devoted wife, Lalita. They loved each other so deeply that they could not bear to be separated even for a moment.

    One day, Lalit was singing in the royal court of King Pundarika. However, his wife was not present. As he sang, his mind wandered to thoughts of Lalita. Distracted by lusty thoughts, he missed the beat and sang the wrong melody. A serpent named Karkotaka, who was in the court, noticed this error and understood the reason. He immediately complained to the King: 'O King, this singer is not focused on you; he is lost in thoughts of his wife.'

    Enraged by this disrespect, King Pundarika cursed Lalit: 'Because you thought of a woman while performing in my court, I curse you to become a monstrous cannibal (Rakshasa) instantly!'

    Immediately, the handsome Lalit transformed. His mouth became a gaping cave, his eyes burned like fire, and he grew eight miles tall. He roamed the forests in agony. When his wife Lalita heard this, she was devastated. She followed her monster-husband into the dense jungle, weeping at his condition.

    After wandering for years, Lalita reached the Vindhyachala mountains and found the ashram of Sage Shringi. She bowed down and cried, 'O Sage, my husband is suffering under a terrible curse. Is there any way to save him?'

    Sage Shringi replied, 'O chaste woman, the Kamada Ekadashi is approaching. If you observe this fast with strict discipline and offer the merit of your fasting to your husband, he will be freed instantly.'

    Lalita observed the fast with great devotion. On the next day (Dwadashi), she stood before the Deity of Lord Vasudeva and said, 'I offer the merit I have earned from this fast to my husband.' Instantly, the roar of the monster ceased. Lalit regained his beautiful Gandharva form, and the couple was transported to the heavenly planets on a celestial airplane. Such is the power of Kamada Ekadashi."`
  },

  // ============================================================
  // VAISHAKHA (April/May)
  // ============================================================
  {
    id: "vaishakha_k",
    name: "Varuthini Ekadashi",
    month: "Vaishakha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj inquired, 'O Vasudeva, I offer my humble obeisances to You. Please describe the Ekadashi of the dark fortnight of Vaishakha.'",
    story: `Lord Krishna replied: "O King, this Ekadashi is called Varuthini. The word 'Varuthini' means 'protected' or 'armored.' One who observes this fast is protected from all misery in this life and the next. It grants the merit of donating gold at Kurukshetra during a solar eclipse.

    The history of this Ekadashi involves the great King Mandhata. He was a pious ruler who never lied and always cared for his subjects. One day, he was meditating in a deep forest. While he was in a trance, a fierce wild bear attacked him. The bear began to chew on the King's foot and dragged him towards the bushes.

    Because he was observing a vow of non-violence and was in a holy trance, the King did not fight back physically. Instead, he prayed intensely to Lord Vishnu: 'O Lord of the Universe, I am helpless. Please protect Your devotee.'

    Lord Vishnu instantly appeared on His vehicle Garuda. With His Sudarshana Chakra, He beheaded the bear. However, the King's leg had been badly mangled and eaten. Mandhata was in great pain and distress about his physical deformity.

    Lord Vishnu said, 'O King, do not grieve. This happened due to a sinful action in your past life. Go to Mathura, and on the banks of the Yamuna, worship my Varaha incarnation (the Boar form). Observe the Varuthini Ekadashi strictly. By the merit of this fast, your limb will be restored, and you will become whole again.'

    King Mandhata did exactly as the Lord instructed. He observed the fast with great devotion, and his leg was miraculously healed, becoming stronger than before. Just as the King was saved from a physical limb loss, the soul is saved from the loss of its spiritual consciousness by this fast. It is said that ten thousand years of penance is equal to observing one Varuthini Ekadashi."`
  },
  {
    id: "vaishakha_s",
    name: "Mohini Ekadashi",
    month: "Vaishakha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira Maharaj said, 'O Janardana, what is the story of the Ekadashi in the bright fortnight of Vaishakha? Please tell me.'",
    story: `Lord Krishna replied: "O Yudhishthira, this sacred day is Mohini Ekadashi. It destroys the darkness of delusion and attachment (Moh). Even Lord Rama observed this fast when He was separated from Sita Devi, to overcome His grief.

    The history dates back to the churning of the Ocean of Milk (Samudra Manthan). When the Devas and Asuras churned the ocean, the pot of Amrita (nectar of immortality) finally emerged. The demons (Asuras) immediately snatched it, wanting to keep it for themselves. The Devas were terrified, knowing that if the demons became immortal, the universe would be destroyed.

    They prayed to Lord Vishnu. To save the universe, Lord Vishnu assumed the form of a dazzlingly beautiful woman named Mohini-Murti. Her beauty was so bewildering that the demons completely forgot about the nectar and simply stared at Her. Mohini tricked the demons into handing the pot to Her, promising to distribute it fairly. She then distributed the nectar only to the Devas, while the demons sat captivated by Her charm.

    This event occurred on the Ekadashi of the bright fortnight of Vaishakha. Therefore, this day is celebrated as Mohini Ekadashi.

    There is another story involving a merchant's son named Dhrishthabuddhi. He was a sinner who wasted his father's wealth on illicit women and gambling. Eventually, he was kicked out of his home and wandered the forest, starving. He eventually met Sage Kaundinya. Dhrishthabuddhi fell at the sage's feet and asked, 'O learned one, I am the greatest sinner. Is there any redemption for me?'

    The sage advised him to fast on Mohini Ekadashi. By observing this fast, Dhrishthabuddhi’s heavy burden of sins—accumulated over many lifetimes—was destroyed in an instant. He attained a divine body and ascended to the abode of Vishnu. Thus, this fast is the ultimate cure for those trapped in the illusion of material existence."`
  },
  // ============================================================
  // JYESHTHA (May/June)
  // ============================================================
  {
    id: "jyeshtha_k",
    name: "Apara Ekadashi",
    month: "Jyeshtha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj said, 'O Janardana, what is the name of the Ekadashi in the dark fortnight of Jyeshtha, and what is its significance?'",
    story: `Lord Krishna replied: "O King, this Ekadashi is known as Apara Ekadashi. 'Apara' means 'unlimited.' The merit obtained from observing this fast is limitless. It cleanses sins as heavy as killing a Brahmin, giving false testimony, or reading false scriptures.

    The history recounts a righteous king named Mahidhwaja. He was a soul of great piety, but he had a younger brother named Vajrabakhya who was cruel and envious. Vajrabakhya hated his brother's righteousness. One dark night, the evil brother murdered Mahidhwaja in the jungle and buried his body under a wild Pippala (Banyan) tree.

    Because of this unnatural and violent death, the pious King did not attain heaven but became a Preta (a wandering ghost). He lived in that Pippala tree, wailing in misery and frightening travelers who passed by.

    One day, the great sage Dhaumya Muni passed that way. He heard the terrible noises of the ghost. Using his mystic vision, the Sage saw the soul of King Mahidhwaja trapped in that ghostly body and understood the tragic cause. Filled with compassion, the Sage decided to help the suffering soul.

    Dhaumya Muni observed the Apara Ekadashi fast strictly on behalf of the ghost. The following day, he offered the merit of the fast to the spirit. Instantly, the ghost was released from its wretched condition. Mahidhwaja regained a celestial body, bowed to the Sage, and ascended to Vaikuntha in a divine chariot, praised by the celestial beings. Thus, Apara Ekadashi gives merit even to those who cannot observe it themselves if a devotee does it for them."`
  },
  {
    id: "jyeshtha_s",
    name: "Nirjala Ekadashi",
    month: "Jyeshtha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, my brothers and Draupadi observe all Ekadashis, but my brother Bhima struggles. Please advise.'",
    story: `Lord Krishna replied: "O King, once Bhimasena, the strongest of the Pandavas, approached his grandfather, the great sage Vyasadeva. Bhima said, 'O Grandfather, Yudhishthira, Kunti Mata, Draupadi, and Arjuna all fast on Ekadashi and tell me to do the same. But I cannot bear hunger! The fire of digestion (Vrika) in my stomach is so intense that I can barely survive without eating. I can give charity and worship Lord Vishnu, but I cannot fast twice a month. Is there any way I can still attain the merit?'

    Vyasadeva replied, 'O Bhima, if you wish to go to Vaikuntha and avoid hell, you must observe Ekadashi. However, since you cannot fast twice a month, you should observe just one specific Ekadashi in the year.'

    The Sage continued, 'In the month of Jyeshtha, during the bright fortnight, when the sun travels in Taurus or Gemini, there occurs an Ekadashi. On this day, you must undergo a strict fast without drinking even a drop of water (Nirjala). You may only sip water for purification (Achamana) solely to clean the mouth. If you observe this strict waterless fast from sunrise to the next sunrise, you will gain the merit of observing all 24 Ekadashis of the year combined.'

    Bhima agreed to this difficult vow. He fasted rigidly, though he felt weak and nearly fainted by the end. On the next morning (Dwadashi), the Pandavas gave him water mixed with Ganga jal and Tulasi. Because Bhima observed this difficult fast, it is famously known as Pandava Nirjala Ekadashi. It is the most powerful of all Ekadashis."`
  },

// ============================================================
// ASHADHA (June/July)
// ============================================================
  {
    id: "ashadha_k",
    name: "Yogini Ekadashi",
    month: "Ashadha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj inquired, 'O Supreme Lord, what is the name of the Ekadashi that occurs in the dark part of Ashadha?'",
    story: `Lord Krishna replied: "O King, it is called Yogini Ekadashi. It removes all sinful reactions and cures terrible diseases like leprosy. Hear this history from the Puranas.

    In the city of Alakapuri lived the King of the Yakshas, Kubera, who was a devout worshiper of Lord Shiva. He had a gardener named Hemamali. Hemamali’s daily duty was to gather fresh flowers from the Manasarovar lake for Kubera’s Shiva Puja.

    Hemamali had a beautiful wife named Swarupavati. One day, after gathering the flowers, Hemamali became overwhelmed by lust for his wife. Instead of taking the flowers to the King, he went home and spent the time in amorous pleasure with her.

    King Kubera waited in his prayer hall for the flowers. When noon arrived and the puja could not be completed, he sent soldiers to find the gardener. They reported, 'O King, Hemamali is at home enjoying with his wife.' Furious at this disrespect to Lord Shiva, Kubera summoned Hemamali and cursed him: 'You sinful wretch! Because you prioritized your lust over the service of the Lord, I curse you to suffer from white leprosy and be separated from your wife forever!'

    Hemamali instantly fell from Alakapuri to Earth, afflicted by leprosy and terrible pain. He wandered in dense forests for years, suffering greatly but maintaining his consciousness because of his past service. Eventually, he reached the Himalayas and found the ashram of the great Sage Markandeya.

    Hemamali fell at the sage's feet. Markandeya Muni, seeing the leper, asked, 'What sin brought you to this state?' Hemamali confessed his mistake truthfully. The Sage, pleased by his honesty, said, 'Observe the fast of Yogini Ekadashi. It will destroy your bad karma.' Hemamali fasted with faith. Instantly, his leprosy vanished, his divine body was restored, and he returned to Alakapuri to be reunited with his wife."`
  },
  {
    id: "ashadha_s",
    name: "Devshayani Ekadashi",
    month: "Ashadha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Keshava, please tell me about the Ekadashi in the bright fortnight of Ashadha. Why is it famous?'",
    story: `Lord Krishna replied: "O King, this is Devshayani Ekadashi (also called Padma Ekadashi). It marks the beginning of the Chaturmas, the four holy months when I, Lord Vishnu, enter into a cosmic slumber (Yoga Nidra) on the serpent Shesha.

    The history tells of a saintly emperor named Mandhata. He ruled with such piety that there was no disease or trouble in his kingdom. However, due to some unknown karma, a severe drought struck his land for three years. The people began to starve. They came to the King and cried, 'O King, rain is the source of grain, and grain is life. Please save us!'

    King Mandhata meditated but could find no fault in his rule. He went to the forest and eventually met the great Sage Angira. The King asked, 'O Sage, why is my kingdom suffering when I follow the Dharma?'

    Sage Angira replied, 'O King, in this Yuga, penance is restricted to Brahmins, but a Shudra in your kingdom is performing severe unauthorized austerities to attain heaven. This violation of cosmic order has stopped the rain. You must stop him.'

    The King replied, 'I cannot kill an innocent man who is merely praying. Please tell me a spiritual solution.'

    The Sage then advised, 'Observe the fast of Padma (Devshayani) Ekadashi with all your subjects. This fast is all-powerful and will restore balance.' The King returned and observed the fast strictly. That very night, dark clouds covered the sky, and rain poured down, ending the famine. Since then, devotees observe this day to please the sleeping Lord and begin their four-month vows (Chaturmas Vrat)."`
  },

// ============================================================
// SHRAVANA (July/August)
// ============================================================
  {
    id: "shravana_k",
    name: "Kamika Ekadashi",
    month: "Shravana",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj said, 'O Lord, what is the name of the Ekadashi in the dark fortnight of Shravana? Please explain its glories.'",
    story: `Lord Krishna replied: "O King, hear the glories of Kamika Ekadashi as narrated by Lord Brahma to Narada Muni. This fast purifies one of sins as great as killing a Brahmin.

    In ancient times, a landlord lived in a village. Once, he got into a heated argument with a Brahmin. In a fit of rage, the landlord accidentally struck and killed the Brahmin. Terrified by the heinous sin of Brahma-hatya (killing a priest), he went to the sages and asked how he could atone. He offered to donate his entire wealth, but the sages said, 'No charity can wash away this stain.'

    Desperate, the landlord begged for a solution. The sages advised, 'Observe the Kamika Ekadashi fast. Stay awake all night and worship Lord Hari with Tulasi leaves.'

    The landlord followed their instructions with intense devotion. That night, Lord Vishnu appeared to him in a dream and said, 'I am pleased with your worship. The sin of killing the Brahmin is removed, and you are now pure.'

    Lord Brahma concluded: 'One who worships Lord Hari with Tulasi leaves on this day is untainted by sin, just as a lotus leaf is untouched by water. It is the best day to worship the Lord to remove the fear of Yamaraj (Death).'"`
  },
  {
    id: "shravana_s",
    name: "Shravana Putrada Ekadashi",
    month: "Shravana",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Madhusudana, what is the significance of the Ekadashi in the bright part of Shravana?'",
    story: `Lord Krishna replied: "It is called Putrada Ekadashi, the 'Giver of Sons.'

    King Mahijit ruled the prosperous kingdom of Mahishmati, but he was deeply sorrowful because he had no son. Without a son, he worried about who would perform his rites and continue his lineage. He consulted his advisors, but they could not find the cause.

    The King's advisors led him to the forest to meet the omniscient Sage Lomasa. The Sage meditated on the King's past lives and revealed, 'In his previous life, this King was a merchant. Once, while traveling on Jyeshtha Shukla Ekadashi, he was extremely thirsty. He found a pond, but just as he was about to drink, a thirsty cow and her calf arrived. He drove them away to drink the water himself. Because he prioritized his own thirst over a suffering animal on a holy day, he is childless now.'

    The advisors asked for a remedy. Sage Lomasa said, 'Observe the Shravana Shukla Ekadashi, known as Putrada. If the King and Queen fast and stay awake, the sin will be washed away.'

    They returned and observed the fast. The King donated the merit to his future child. Soon after, the Queen conceived and gave birth to a radiant son who grew up to be a noble successor. This fast is specifically recommended for those seeking children."`
  },

// ============================================================
// BHADRAPADA (August/September)
// ============================================================
  {
    id: "bhadra_k",
    name: "Aja Ekadashi",
    month: "Bhadrapada",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj asked, 'O Janardana, what is the name of the Ekadashi in the dark fortnight of Bhadrapada?'",
    story: `Lord Krishna replied: "O King, it is Aja Ekadashi. It restores lost fortune and family.

    The famous Truthful King Harishchandra once ruled the world. To uphold a promise made to Sage Vishwamitra in a dream, he donated his entire kingdom. To pay the 'Dakshina' (fee) to the sage, he had to sell his wife Taramati and son Rohitasva into slavery, and finally sold himself to a Chandala (keeper of a cremation ground).

    For years, the great King worked as a lowly guard at the cremation ground in Kashi, stripping clothes from dead bodies. He suffered immense sorrow, separated from his family and dignity. One day, his son died of a snakebite, and his wife came to the cremation ground weeping, unable to pay the fee to cremate him.

    Seeing his despair, Sage Gautama passed by and advised him: 'O King, observe Aja Ekadashi. Fast without water and stay awake all night.'

    Harishchandra did so. By the power of this fast, flowers rained from the sky. Lord Vishnu appeared, bringing his son back to life and restoring his wife and kingdom. The suffering was an illusion (Maya) to test his truthfulness, and Aja Ekadashi ended the test. He ruled happily and eventually attained the spiritual world."`
  },
  {
    id: "bhadra_s",
    name: "Parivartini (Parsva) Ekadashi",
    month: "Bhadrapada",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, why is this Ekadashi called Parivartini (Changing Side)?'",
    story: `Lord Krishna replied: "O King, on this day, while sleeping in the Ocean of Milk, I turn from My left side to My right side (Parivartan). It is also called Vamana Ekadashi because it pleases My Vamana incarnation.

    The story concerns King Bali, the grandson of Prahlada. Though born in a dynasty of demons, he was a great devotee. He defeated Indra and conquered the heavens. Indra prayed to Me, and I took the form of a dwarf Brahmin boy (Vamana).

    I went to Bali's sacrificial arena and asked for three steps of land. Bali, known for his charity, agreed despite his guru Shukracharya's warning.

    I then expanded My form. With the first step, I covered the Earth. With the second, I covered the Heavens. I asked, 'Where should I place the third step?'

    Bali Maharaj, surrendering completely, bowed his head and said, 'Place it on my head, O Lord.' Pleased by his surrender, I placed My foot on his head, pushing him to Sutala-loka, but I granted him the benediction that I would personally become his doorkeeper. Worshiping Lord Vamana on this day liberates a person from all material bondage."`
  },

// ============================================================
// ASHVINA (September/October)
// ============================================================
  {
    id: "ashvina_k",
    name: "Indira Ekadashi",
    month: "Ashvina",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira Maharaj asked, 'O Madhusudana, which Ekadashi occurs during the dark fortnight of Ashvina (Pitru Paksha), and what is its merit?'",
    story: `Lord Krishna replied: "O King, this Ekadashi is called Indira Ekadashi. It is the most powerful fast for liberating one's ancestors (Pitrus) from hellish conditions.

    In the Satya Yuga, King Indrasena ruled the city of Mahishmati. He was powerful and pious. One day, the great sage Narada Muni descended from the sky. The King offered him a comfortable seat and asked for the cause of his visit.

    Narada Muni said, 'O King, I visited the abode of Yamaraj (the Lord of Death). There, I saw your father suffering. He had died with some unfinished sinful reactions. He gave me a message for you: "Tell my son Indrasena to observe the Indira Ekadashi fast and offer the merit to me, so I can be released from this suffering and go to Vaikuntha."'

    King Indrasena was heartbroken to hear of his father's plight. He asked Narada for the procedure. Narada instructed him to fast completely on Ekadashi, sleep on the floor, and on Dwadashi, feed Brahmins and offer the merit to his father.

    The King followed the instructions perfectly. At the moment he broke the fast and offered the merit, flowers rained from the sky. The King saw the soul of his father released from Yamaloka and ascending to the spiritual world on the back of Garuda. Since then, this fast is observed to help deceased ancestors."`
  },
  {
    id: "ashvina_s",
    name: "Pashankusha Ekadashi",
    month: "Ashvina",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the name of the Ekadashi in the bright fortnight of Ashvina?'",
    story: `Lord Krishna replied: "It is Pashankusha Ekadashi. 'Pasha' means rope and 'Ankusha' means the goad used to control an elephant. This fast controls the mad elephant of the mind and sins.

    The merit of this fast is equal to performing one hundred Horse Sacrifices (Ashvamedha Yajna). It is said that even if a person has committed many sins, if they observe this Ekadashi with faith, they do not have to see the terrifying Yamadutas (servants of Death).

    There was once a cruel hunter who had spent his entire life killing animals and sinning. As he approached old age, he was afraid of death. He met a sage who told him to observe Pashankusha Ekadashi. Though he had no history of piety, he fasted on this day hoping to avoid hell. The power of the fast was so immense that it burned his lifetime of sins to ashes, and he was granted a beautiful form in the spiritual world. This proves that Vishnu is eager to save even the fallen souls."`
  },

// ============================================================
// KARTIKA (October/November)
// ============================================================
  {
    id: "kartika_k",
    name: "Rama Ekadashi",
    month: "Kartika",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira asked, 'O Lord, please describe the Ekadashi of the dark fortnight of Kartika.'",
    story: `Lord Krishna replied: "It is Rama Ekadashi, named after my consort Rama (Lakshmi). It destroys the greatest sins.

    King Muchakunda was a great devotee and a friend of Indra. In his kingdom, he issued a royal decree: 'On Ekadashi, no one—not even elephants or horses—shall eat food.'

    His daughter, Chandrabhaga, was married to Prince Shobhana. Shobhana was physically very weak and could not tolerate hunger. Once, he visited Muchakunda's palace during Ekadashi. Chandrabhaga warned him: 'My father is strict. Even the animals fast here. You must leave if you want to eat.'

    Shobhana decided to stay and try to fast to save his honor. However, by midnight, his hunger became unbearable, and he died before sunrise.

    Because he died observing the Ekadashi vow (even though reluctantly), he was reborn as the Deva-ruler of a celestial city on Mandarachala Mountain. However, because his fasting was done without faith, his city was temporary and invisible.

    Later, a Brahmin from Muchakunda's kingdom found Shobhana in the mountains. Shobhana explained his situation. The Brahmin returned and told Chandrabhaga. She, having observed Ekadashi perfectly all her life, transferred her accumulated merit to her husband. Instantly, his city became eternal and full of jewels, and they lived there happily."`
  },
  {
    id: "kartika_s",
    name: "Prabodhini (Devutthana) Ekadashi",
    month: "Kartika",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the Ekadashi that ends the Chaturmas?'",
    story: `Lord Krishna replied: "It is Prabodhini Ekadashi (The Awakening). On this day, I wake up from My four-month cosmic sleep.

    This day is very festive. It marks the marriage of the Tulasi plant (Vrinda Devi) to the Shaligram Shila (Vishnu). It is said that one who stays awake all night (Jagaran) singing the glories of the Lord on this day washes away the sins of a thousand lifetimes.

    In the past, Narada Muni asked Brahma about this day. Brahma replied, 'O Narada, a person who observes this fast is not a human but a mobile place of pilgrimage. Even if one has committed the worst sins in childhood, youth, or old age, they are nullified by fasting on Prabodhini Ekadashi.' It is the traditional start of the auspicious wedding season in India."`
  },

// ============================================================
// MARGASHIRSHA (November/December)
// ============================================================
  {
    id: "marga_k",
    name: "Utpanna Ekadashi",
    month: "Margashirsha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira asked, 'O Janardana, please tell me how Ekadashi Devi first appeared.'",
    story: `Lord Krishna replied: "O King, in the Satya Yuga, there was a demon named Mura. He terrified all the demigods and even challenged Me to fight. I fought with him for one thousand years. Finally, I felt tired and decided to rest in a cave called Hemavati to recuperate.

    While I was sleeping in the cave, Mura followed Me and raised his weapon to kill Me. Suddenly, a radiant Goddess manifested from My own body. She was My Shakti. With a thunderous roar, she disarmed Mura and killed him instantly.

    When I awoke, I saw the dead demon and the Goddess bowing to Me. I asked, 'Who are you?' She replied, 'I am born from You, O Lord, to protect You.'

    Pleased, I named her 'Ekadashi' because she appeared on the eleventh day. I granted her a boon: 'Since you appeared to protect Me, anyone who fasts on your day will be protected by Me, freed from all sins, and will attain My abode.' This is the birthday of the Ekadashi Vrat."`
  },
  {
    id: "marga_s",
    name: "Mokshada Ekadashi",
    month: "Margashirsha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the Ekadashi of the bright fortnight of Margashirsha?'",
    story: `Lord Krishna replied: "It is Mokshada Ekadashi, the 'Giver of Liberation'. This is a very special day, for on this day, I spoke the Srimad Bhagavad Gita to Arjuna on the battlefield of Kurukshetra.

    The story involves a King named Vaikhanasa. One night, he dreamt that his father was suffering in a hellish planet. Disturbed, he consulted the Brahmins, who directed him to the mountain ashram of Parvat Muni.

    Parvat Muni meditated and saw the King's father's past. He said, 'In his previous life, your father quarreled with his wife and committed a sexual sin. That is why he is suffering.' The King asked for a remedy.

    The Sage said, 'Observe the Mokshada Ekadashi and offer the merit to your father.' The King did so faithfully. As soon as he offered the merit, flowers rained down, and his father was liberated from hell, blessing his son as he ascended to heaven. This fast breaks the chains of material attachment."`
  },

// ============================================================
// PAUSHA (December/January)
// ============================================================
  {
    id: "pausha_k",
    name: "Saphala Ekadashi",
    month: "Pausha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the name of the Ekadashi in the dark fortnight of Pausha?'",
    story: `Lord Krishna replied: "It is Saphala Ekadashi. 'Saphala' means 'fruitful' or 'successful'.

    There was once a prince named Lumpaka. He was the eldest son of a King, but he was wicked. He insulted Brahmins and spent his father's wealth on gambling. The King eventually exiled him. Lumpaka lived in the forest, robbing travelers and eating raw meat.

    He lived under an old Banyan tree, which happens to be dear to Lord Vishnu. On the day of Saphala Ekadashi, Lumpaka was so weak from cold and hunger that he could not go out to hunt or steal. He lay at the foot of the tree, awake all night, shivering. Unknowingly, he had fasted and kept a vigil (Jagaran).

    At sunrise, he felt a change in his heart. A divine horse approached him, and a voice from the sky said, 'Prince, by the merit of your unknowing fast, your kingdom is returned to you.' Lumpaka returned to his father a changed man, ruled wisely, and attained liberation. This proves that Ekadashi is powerful even when observed without intent."`
  },
  {
    id: "pausha_s",
    name: "Pausha Putrada Ekadashi",
    month: "Pausha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, is there another Putrada Ekadashi?'",
    story: `Lord Krishna replied: "Yes, the Ekadashi in the bright fortnight of Pausha is also called Putrada Ekadashi.

    King Suketuman and Queen Shaibya of Bhadravati were deeply depressed because they had no son. They felt their lives were useless and even contemplated suicide. They left their kingdom and entered the forest unnoticed.

    Wandering, they became thirsty and found a beautiful lake. It was the day of Ekadashi, and many sages were bathing there. The King approached them and asked who they were. They replied, 'We are the Vishwadevas. We have come because today is Putrada Ekadashi, which grants children to the childless.'

    The King immediately bowed and said, 'I am childless and in great distress.' The sages advised him to observe the fast that very day. The King and Queen fasted perfectly. Upon returning to the palace, the Queen conceived and later gave birth to a son who became a great hero. This fast fulfills the desire for a noble lineage."`
  },

// ============================================================
// MAGHA (January/February)
// ============================================================
  {
    id: "magha_k",
    name: "Shattila Ekadashi",
    month: "Magha",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira asked, 'O Janardana, what is the significance of the Ekadashi in the dark fortnight of Magha?'",
    story: `Lord Krishna replied: "It is Shattila Ekadashi. 'Shat' means six and 'Tila' means sesame seeds.

    Once, a Brahmin woman was very pious and performed many fasts, but she never gave charity (Dana) to the poor or Brahmins. She felt that fasting alone was enough. To teach her a lesson, I disguised myself as a beggar and asked for alms. She angrily threw a mud ball into my begging bowl.

    When she died, she went to the spiritual world because of her fasting. She was given a beautiful house, but it was empty—no food, no furniture. She prayed to Me, 'Lord, why is my house empty?'

    I told her, 'You never gave charity. Return to your house and close the door. The wives of the Devas will come to see you. Do not open the door until they tell you the secret of Shattila Ekadashi.'

    She did as instructed. The Deva-wives explained that one must use sesame seeds in six ways on this day: bathing in water mixed with them, rubbing the paste, offering them in fire, eating them, giving them in charity, and accepting them. She followed this, and her house was instantly filled with grains and gold. This fast cures the mentality of stinginess."`
  },
  {
    id: "magha_s",
    name: "Jaya (Bhaimi) Ekadashi",
    month: "Magha",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the name of the Ekadashi in the bright fortnight of Magha?'",
    story: `Lord Krishna replied: "It is Jaya Ekadashi. It bestows victory and liberates one from ghostly bodies.

    In the court of Indra, a Gandharva named Malyavan and an Apsara named Pushpawati fell in love. During a musical performance for Indra, they were so distracted by their lust for each other that they sang and danced out of rhythm.

    Indra was furious at this insult to the assembly. He cursed them: 'You fools! You are acting like Pisachas (goblins). Go and become Pisachas in the earthly region!'

    They fell to the Himalayas, becoming ghostly, suffering creatures. It was winter, and the cold was unbearable. On the day of Jaya Ekadashi, they were so miserable that they did not eat or sleep. They sat under a tree, awake all night, shivering.

    Unknowingly, they had observed the strict fast of Jaya Ekadashi. The next morning, their ghostly bodies vanished. They regained their beautiful celestial forms and were taken back to heaven in a flying chariot. Indra was shocked to see them back and asked how they were freed. Malyavan replied, 'By the mercy of Lord Keshav and the power of Jaya Ekadashi.'"`
  },

// ============================================================
// PHALGUNA (February/March)
// ============================================================
  {
    id: "phalguna_k",
    name: "Vijaya Ekadashi",
    month: "Phalguna",
    paksha: "Krishna",
    dialogue_intro: "Yudhishthira asked, 'O Lord, please describe the Ekadashi of the dark fortnight of Phalguna.'",
    story: `Lord Krishna replied: "It is Vijaya Ekadashi, the giver of victory.

    When Lord Rama was in exile, He reached the shore of the ocean with His monkey army, searching for Sita. The ocean was vast and dangerous, and the army of Ravana was powerful. Lord Rama asked Lakshmana, 'How can we cross this ocean and defeat such a powerful enemy?'

    Lakshmana suggested seeking the advice of the great sage Bakadalabhya, who lived nearby. The Sage told Rama, 'O Prince, there is a formidable fast called Vijaya Ekadashi. If You and Your army observe this fast, You will certainly cross the ocean and achieve victory.'

    Lord Rama, though He is the Supreme Lord, set an example for humanity by observing this fast with full devotion. By the merit of Vijaya Ekadashi, the monkey army successfully built the bridge (Ram Setu) and defeated Ravana. This fast is recommended for anyone facing difficult obstacles, lawsuits, or competition."`
  },
  {
    id: "phalguna_s",
    name: "Amalaki Ekadashi",
    month: "Phalguna",
    paksha: "Shukla",
    dialogue_intro: "Yudhishthira asked, 'O Lord, what is the final Ekadashi of the year?'",
    story: `Lord Krishna replied: "It is Amalaki Ekadashi. The Amalaki (Amla/Gooseberry) tree is sacred because Lord Brahma and Lord Vishnu reside in it.

    King Chitrasena and his subjects were very pious. On this Ekadashi, they went to the forest to worship a large Amalaki tree. They offered water, lamps, and incense, and stayed awake all night singing bhajans.

    A hunter, who was a killer of animals and a sinner, passed by. He was tired and hungry. He saw the celebration and hid nearby, watching the worship. He did not eat anything all night and stayed awake watching the lamp burn.

    By the morning, the hunter had unknowingly observed the Ekadashi vigil. After his death, despite his sinful life, he was born as a powerful King named Vasuratha.

    Once, Vasuratha was lost in the jungle and captured by tribals who tried to kill him. Suddenly, a beautiful light emerged from the King's body and destroyed the attackers. A voice from the sky said, 'You are protected by the merit of the Amalaki Ekadashi you observed in your past life.'"`
  }
];

// Helper to map Gregorian Date index (0-11) to Hindu Month approximate
// This is a simplified mapping. Ideally, we should use Sun Longitude, but this covers 90% of cases for common users.
const mapMonthIndexToName = (monthIndex: number): string[] => {
  switch(monthIndex) {
    case 0: return ["Pausha", "Magha"];      // January
    case 1: return ["Magha", "Phalguna"];     // February
    case 2: return ["Phalguna", "Chaitra"];   // March
    case 3: return ["Chaitra", "Vaishakha"];  // April
    case 4: return ["Vaishakha", "Jyeshtha"]; // May
    case 5: return ["Jyeshtha", "Ashadha"];   // June
    case 6: return ["Ashadha", "Shravana"];   // July
    case 7: return ["Shravana", "Bhadrapada"];// August
    case 8: return ["Bhadrapada", "Ashvina"]; // September
    case 9: return ["Ashvina", "Kartika"];    // October
    case 10: return ["Kartika", "Margashirsha"]; // November
    case 11: return ["Margashirsha", "Pausha"]; // December
    default: return ["Pausha", "Magha"];
  }
};

export const getEkadashiInfo = (date: Date, tithiIndex: number): EkadashiInfo => {
  const monthIndex = date.getMonth();
  const possibleMonths = mapMonthIndexToName(monthIndex);
  
  // Tithi 11 is Shukla (Bright), Tithi 26 is Krishna (Dark)
  const targetPaksha = tithiIndex <= 15 ? 'Shukla' : 'Krishna';

  // Find a match in our database
  let match = EKADASHI_DEEP_STORIES.find(s => 
    possibleMonths.includes(s.month) && s.paksha === targetPaksha
  );

  // Fallback logic if simplified month mapping fails (e.g. edge of month)
  if (!match) {
    // Try just matching Paksha and picking one from the possible months blindly
    match = EKADASHI_DEEP_STORIES.find(s => s.month === possibleMonths[0] && s.paksha === targetPaksha) ||
            EKADASHI_DEEP_STORIES.find(s => s.month === possibleMonths[1] && s.paksha === targetPaksha);
  }

  if (match) {
    return {
      name: match.name,
      story: match.story,
      // Synthesis of missing fields to keep UI consistent
      spiritual_benefit: match.dialogue_intro, 
      scientific_benefit: "Fasting on this day triggers deep cellular autophagy, reducing oxidative stress and inflammation markers.",
      foods_allowed: ["Fruits", "Roots", "Milk", "Nuts"],
      foods_avoided: ["Grains", "Beans", "Lentils", "Onions"]
    };
  }

  // Absolute Fallback
  return {
    name: "Ekadashi",
    scientific_benefit: "Regular fasting triggers autophagy, cleaning out damaged cells and regenerating new ones.",
    spiritual_benefit: "Increases devotion to Hari and purifies the mind for meditation.",
    story: "Ekadashi is the eleventh lunar day of each of the two lunar phases which occur in a Hindu calendar month - the Shukla Paksha (bright half) and the Krishna Paksha (dark half). It is considered a spiritually beneficial day and is usually observed by partial fast.",
    foods_allowed: ["Fruits", "Roots", "Dairy", "Nuts"],
    foods_avoided: ["Grains", "Beans", "Lentils", "Onions", "Garlic"]
  };
};
