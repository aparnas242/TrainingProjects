namespace MVCusingFKdemo.Models
{
    public class Grade
    {
        public Grade()
        {
            Students = new List<Student>();
        }

        public int Id { get; set; }
        public string? Grading { get; set; }
        public IList<Student>? Students { get; set; }
    }
}
