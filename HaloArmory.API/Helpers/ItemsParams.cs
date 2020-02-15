using System.Collections.Generic;

namespace HaloArmory.API.Helpers
{
    public class ItemsParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }
        public List<string> Types { get; set; }
        public int MinPrice { get; set; }
        public int MaxPrice { get; set; }
    }
}