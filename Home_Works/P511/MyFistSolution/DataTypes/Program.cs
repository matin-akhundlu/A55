using System;

namespace DataTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Info");

            byte a = 4;

            int sizeOfByte = sizeof(byte);

            Console.WriteLine($"----BYTE----" +
                $"\nsize={sizeOfByte} byte" +
                $"\nvalue={a}" +
                $"\nMinValue={byte.MinValue}" +
                $"\nMaxValue={byte.MaxValue}");


            Console.ReadKey();
        }
    }
}
