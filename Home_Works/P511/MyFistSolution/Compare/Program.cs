using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {


            Console.WriteLine();
            Console.WriteLine("--Compare--");
            Console.WriteLine();

            int a = 17;
            int b = 5;

            bool result = a == b;
            int m = 8, n = 13, r = 55;

            result = m + n > r && n + r > m && m + r > n;
            result = m + n > r || n + r > m || m + r > n;

            //bool resultInvers = !result;

            Console.WriteLine($"Uchbucaq qurmaq mumkundu?   :  {result}");

            //Console.WriteLine(result);

            //result = a > b;

            //Console.WriteLine(result);

            result = a < b;


            Console.WriteLine($"{a}<{b}      : {result}");

            result = a == b;


            Console.WriteLine($"{a}=={b}     : { result}");

            result = a > b;


            Console.WriteLine($"{a}>{b}      : { result}");


            result = a != b;


            Console.WriteLine($"{a} != {b}   : { result}");


            result = a <= b;


            Console.WriteLine($"{a} <= {b}   : { result}");


           

            Console.WriteLine($"Uchbucaq qurmaq mumkundu?   :  {result}");






            Console.ReadKey();
        }
    }
}
