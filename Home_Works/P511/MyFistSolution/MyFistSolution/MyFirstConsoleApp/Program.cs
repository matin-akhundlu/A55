using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Please push the ENTER.");
            Console.ReadLine();

            Console.WriteLine("Enter your first name:");
            String name = Console.ReadLine();

            Console.WriteLine("Enter your last name:");
            string surname = Console.ReadLine();

            Console.WriteLine($"Welcome. {name} {surname}. Registration is completed. Thank you for the chosen us.");
            Console.ReadLine();

            Console.WriteLine("BYE");


            Console.ReadKey();

        }
    }
}
