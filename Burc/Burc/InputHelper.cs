using System;

namespace Helpers
{
    static public class InputHelper
    {
        //duz yazilib yazilmadigi yoxlanilsin...
        static public string GetStringFromConsole(string msg, bool allowEmpty = false)
        {
        l1:
            Console.Write(msg);
            string value = Console.ReadLine();

            if (!allowEmpty && string.IsNullOrWhiteSpace(value))
                goto l1;

            return value;
        }

        static public int GetIntFromConsole(string msg)
        {
        l1:
            Console.Write(msg);
            string value = Console.ReadLine();

            if (!int.TryParse(value, out int number))
                goto l1;

            return number;
        }

        static public int GetIntFromConsole(string msg, out int digitCount)
        {
        l1:
            Console.Write(msg);
            string value = Console.ReadLine();

            if (!int.TryParse(value, out int number))
            { goto l1; }

            digitCount = (number.ToString()).Length; //012 -> 2reqemli
            return number;
        }
    }
}
